#!/bin/bash

echo "🔧 Replacing Builder.io CDN URLs with local image paths..."

# Define replacements
declare -A replacements=(
    ["https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80"]="/saintvision-logo.webp"
    ["https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Ffae77fcf2442491fade782e3822c0421?format=webp&width=800"]="/saintvision-main-logo.webp"
    ["https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6a4a7caae7d14837b20112e2ce9e5015?format=webp&width=300"]="/cookin-knowledge.webp"
    ["https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdbc34a0fdf4849459b0ed2678312de82?format=webp&width=80"]="/sv-companion.webp"
    ["https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F8c7c9578e6324915bda191428ef80ec9?format=webp&width=800"]="/supersal-ai.webp"
    ["https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F92c010749dfe4c8da022a5b1c11b2a37?format=webp&width=800"]="/auth-background.webp"
)

# Process all TypeScript/TSX files in client directory
find client -name "*.ts" -o -name "*.tsx" | while read -r file; do
    echo "Processing: $file"
    
    # Create temporary file
    temp_file=$(mktemp)
    cp "$file" "$temp_file"
    
    # Apply all replacements
    for search_url in "${!replacements[@]}"; do
        replace_path="${replacements[$search_url]}"
        sed -i "s|${search_url}|${replace_path}|g" "$temp_file"
    done
    
    # Only update if there were changes
    if ! cmp -s "$file" "$temp_file"; then
        cp "$temp_file" "$file"
        echo "✅ Updated: $file"
    fi
    
    rm "$temp_file"
done

echo "🎉 Image URL replacement complete!"
