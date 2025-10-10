# 🚀 Quick Deploy to GitHub Pages

# Step 1: Initialize Git (if not already done)
Write-Host "🔧 Initializing Git repository..." -ForegroundColor Cyan
git init

# Step 2: Add all files
Write-Host "📦 Adding files..." -ForegroundColor Cyan
git add .

# Step 3: Commit
Write-Host "💾 Creating commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Portfolio for Codédex Back2School Challenge 🎉"

# Step 4: Instructions for GitHub
Write-Host ""
Write-Host "✅ Local repository ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Create a repository named 'portfolio'" -ForegroundColor White
Write-Host "3. Run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin https://github.com/ShubhTHEkings/portfolio.git" -ForegroundColor Magenta
Write-Host "   git branch -M main" -ForegroundColor Magenta
Write-Host "   git push -u origin main" -ForegroundColor Magenta
Write-Host ""
Write-Host "4. Enable GitHub Pages:" -ForegroundColor White
Write-Host "   - Go to repository Settings → Pages" -ForegroundColor White
Write-Host "   - Source: Deploy from branch 'main'" -ForegroundColor White
Write-Host "   - Save and wait 2-3 minutes" -ForegroundColor White
Write-Host ""
Write-Host "5. Your site will be live at:" -ForegroundColor White
Write-Host "   https://shubhthekings.github.io/portfolio/" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎉 Good luck with the challenge!" -ForegroundColor Green
