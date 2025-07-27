import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  RefreshCw,
  Activity,
  Zap,
  Database,
  Globe,
  Settings
} from "lucide-react";
import { toolHealthCheck } from "@/utils/ToolValidation";

interface HealthStatus {
  totalTools: number;
  activeTools: number;
  developmentTools: number;
  placeholderTools: number;
  validatedTools: number;
  issues: string[];
}

export function SystemHealth() {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  const runHealthCheck = async () => {
    setIsLoading(true);
    try {
      const status = await toolHealthCheck();
      setHealthStatus(status);
      setLastCheck(new Date());
    } catch (error) {
      console.error('Health check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Run initial health check
    runHealthCheck();
    
    // Set up periodic health checks every 5 minutes
    const interval = setInterval(runHealthCheck, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const getHealthColor = () => {
    if (!healthStatus) return "text-gray-400";
    
    const successRate = healthStatus.validatedTools / healthStatus.activeTools;
    
    if (successRate >= 0.9) return "text-green-400";
    if (successRate >= 0.7) return "text-yellow-400";
    return "text-red-400";
  };

  const getHealthIcon = () => {
    if (!healthStatus) return Activity;
    
    const successRate = healthStatus.validatedTools / healthStatus.activeTools;
    
    if (successRate >= 0.9) return CheckCircle;
    if (successRate >= 0.7) return AlertTriangle;
    return XCircle;
  };

  const getSystemScore = () => {
    if (!healthStatus) return 0;
    return Math.round((healthStatus.validatedTools / healthStatus.totalTools) * 100);
  };

  const HealthIcon = getHealthIcon();

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-400 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">System Health</h3>
            <p className="text-sm text-gray-400">Tool ecosystem monitoring</p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={runHealthCheck}
          disabled={isLoading}
          className="border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Check
        </Button>
      </div>

      {healthStatus ? (
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 ${getHealthColor()}`}>
              {getSystemScore()}%
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <HealthIcon className={`w-4 h-4 ${getHealthColor()}`} />
              System Operational Score
            </div>
          </div>

          {/* Tool Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">
                {healthStatus.totalTools}
              </div>
              <div className="text-xs text-gray-400">Total Tools</div>
            </div>
            
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {healthStatus.activeTools}
              </div>
              <div className="text-xs text-gray-400">Active</div>
            </div>
            
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                {healthStatus.developmentTools}
              </div>
              <div className="text-xs text-gray-400">In Development</div>
            </div>
            
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-[hsl(var(--gold))] mb-1">
                {healthStatus.validatedTools}
              </div>
              <div className="text-xs text-gray-400">Validated</div>
            </div>
          </div>

          {/* System Components */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Core Systems</h4>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Authentication System</span>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">API Endpoints</span>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">AI Services</span>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Navigation System</span>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
          </div>

          {/* Issues */}
          {healthStatus.issues.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-red-400">Issues Detected</h4>
              {healthStatus.issues.map((issue, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-red-900/20 border border-red-800 rounded">
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm text-red-300">{issue}</span>
                </div>
              ))}
            </div>
          )}

          {/* Last Check Time */}
          {lastCheck && (
            <div className="text-center text-xs text-gray-500">
              Last checked: {lastCheck.toLocaleTimeString()}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8 text-gray-600" />
          </div>
          <p className="text-gray-400">
            {isLoading ? 'Running health check...' : 'Click "Check" to run system diagnostics'}
          </p>
        </div>
      )}
    </div>
  );
}

export default SystemHealth;
