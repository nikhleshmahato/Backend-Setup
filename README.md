# Backend-Setup
Complete backend setup from scratch

to upload file / folder in existing git hub repo,
we must first full the git hub repo to out local repo.  
(git hub officially does this to avoid overwritting).    
  

1.  
git reset

3.  
git hub sets the offical endpoint to the repository, no need to pass any sub folder path.  
git remote set-url  origin https://github.com/nikhleshmahato/Backend-Setup.git    

3.   
to merge both remote and local repo , in local system.   
git pull origin main --allow-unrelated-histories  
   

git init  
git add .  
git status  
git commit -m "backend boilerplate"  
git push -u origin main  


# upload precaution
we should keep the .gitignore file at the *root level* of the repository  
