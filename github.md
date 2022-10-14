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