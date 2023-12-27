read -p "commit message: " commitmessage

git add .
git commit -m "$commitmessage"
git branch -m main
git push origin main