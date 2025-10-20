#!/bin/bash

# Icon Generator Script for RO MVP Timer PWA
# Generates PWA icons from a source image or creates placeholder icons

echo "🎨 Generating PWA Icons..."

# Check if source image is provided
if [ -f "$1" ]; then
    SOURCE_IMAGE="$1"
    echo "Using source image: $SOURCE_IMAGE"
    
    # Generate 192x192
    convert "$SOURCE_IMAGE" -resize 192x192 -quality 100 images/favicon/icon-192.png
    echo "✅ Generated icon-192.png"
    
    # Generate 512x512
    convert "$SOURCE_IMAGE" -resize 512x512 -quality 100 images/favicon/icon-512.png
    echo "✅ Generated icon-512.png"
    
    # Generate favicon
    convert "$SOURCE_IMAGE" -resize 32x32 -quality 100 images/favicon/favicon.ico
    echo "✅ Generated favicon.ico"
    
else
    echo "No source image provided. Creating placeholder icons..."
    
    # Create placeholder 192x192 with text
    convert -size 192x192 xc:'#6366f1' \
        -font Arial -pointsize 80 -fill white \
        -gravity center -annotate +0+0 'MVP' \
        images/favicon/icon-192.png
    echo "✅ Generated placeholder icon-192.png"
    
    # Create placeholder 512x512 with text
    convert -size 512x512 xc:'#6366f1' \
        -font Arial -pointsize 200 -fill white \
        -gravity center -annotate +0+0 'MVP' \
        images/favicon/icon-512.png
    echo "✅ Generated placeholder icon-512.png"
    
    # Create placeholder favicon
    convert -size 32x32 xc:'#6366f1' \
        -font Arial -pointsize 16 -fill white \
        -gravity center -annotate +0+0 'M' \
        images/favicon/favicon.ico
    echo "✅ Generated placeholder favicon.ico"
fi

echo ""
echo "🎉 Icon generation complete!"
echo ""
echo "To use custom icons:"
echo "1. Create a 512x512 PNG source image"
echo "2. Run: ./generate-icons.sh your-image.png"
echo ""
echo "Or use online tools:"
echo "- https://realfavicongenerator.net/"
echo "- https://www.pwabuilder.com/imageGenerator"
