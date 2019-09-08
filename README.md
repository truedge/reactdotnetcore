# reactdotnetcore
A react and dotnetcore platform
<<<<<<< HEAD
=======


RUN THE FOLLOWING TO GET CODE METRICS 

npm install -g sloc
sloc src

---------- Result ------------

            Physical :  2301
              Source :  1918
             Comment :  91
 Single-line comment :  44
       Block comment :  47
               Mixed :  6
 Empty block comment :  1
               Empty :  299
               To Do :  0

Number of files read :  19
<<<<<<< HEAD
>>>>>>> dev
=======

9/8/2019
---------- Result ------------

            Physical :  2610
              Source :  2150
             Comment :  105
 Single-line comment :  58
       Block comment :  47
               Mixed :  8
 Empty block comment :  1
               Empty :  364
               To Do :  0

Number of files read :  23

----------------------------

## Snippets

### mySQL
* sudo mysqldump -u root -pitecmint --all-databasess > esscoresql.sql


### linux
* etc/mysql/mysql.conf.d
**** set the ip address of the sql server (bind)

### linux firewall
**** sudo ufw allow





# Feature Branching
git checkout dev

git branch feature

-- develop feature

git commit -a -m "commit msg"


git checkout dev
git merge feature
git branch --delete feature

git checkout master

git merge dev


git push origin master

git push origin --delete feature1

git branch --delete feature1

git checkout dev

// removes staged/unstaged changes 
git reset --hard



# Dotnet
dotnet publish

dotnet build
dotnet run
>>>>>>> dev
