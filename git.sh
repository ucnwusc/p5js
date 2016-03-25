set -x
echo "# p5js" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/ucnwusc/p5js.git
git push -u origin master
