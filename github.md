How do i create a new branch?
checkout tells us to go to a new place 
-b is saying create a new branch
git checkout -b <name of branch>

To combine add and commit use 
git commit -am "message"

To see all branches 
git  branch 
hit Q when you are done viewing the branch 

To push to a branch 
git push origin <branch name>

git checkout <branch name> without the b allows you to switch branches

git pull orign main
Do this after you merge on Github and before you add anything else 
to your mian branch

git branch -d <branch name>
To locally delete branch 
if you get a message that it wont delete use git branch -D <branch name>

I am ccreating a Contact component. I want to push it Github without my Netlify

1 - create a local branch
2 - create Components folder
3 create cOntact .js
4 - git status look at updates 
5 - git add .
6 - git commit -m <message in quotes>
7 - add component to the App.js
8 - npm start make sure changes are working 
9 - git status check everything is stagged
