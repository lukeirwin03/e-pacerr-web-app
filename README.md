# E-PACERR
This is the GitHub Reposity for the E-PACERR project.

# How to Run the Website on your Local Machine:
## Cloning the Repository
_The following tutorial can be performed using a Linux Terminal._ 
1. Assuming you are on the GitHub repository page for the E-PACERR Website, the first thing you will need to do is acquire the URL in which the repository is located. This can be found when you click the green `<> Code` button. 
2. Depending on your machine and settings, you will have to choose between the `Local` and `Codespaces` tabs (you will most likely be using local). Next you will have to choose between `HTTPS`, `SSH`, and `GitHub CLI`. This will depend on how you intend on cloning the repository, but it is most likely that you will just use the `HTTPS` URL. For this repository, the current URL is `https://github.com/kmcooper/E-PACERR.git`. 
3. The next thing you will do is open a Terminal Window and navigate to the directory that you would like the files to be stored under. 
4. You will then do the command `git clone https://github.com/kmcooper/E-PACERR.git` to clone the repository to your working directory.

For more information regarding this process, please see the general documentation for GitHub: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?platform=mac

## Running the Next.js App on your Local Machine
1. Assuming that you have successfully cloned the repository onto your local machine, you will need to open a Terminal Window and navigate to the directory in which the local repository resides: `./e-pacerr`
2. All you will need to do to locally host it is run the command `npm run dev` from your working directory. This will build the application and tell you where to go to view the locally hosted website. 
3. Open a browser window and go to the URL specified by the Terminal after running the application. By default, this should be `http://localhost:3000`, but the port may be changed if by running the command `PORT=NEW_PORT_NUMBER next start` where `NEW_PORT_NUMBER` is your desired port number.

For more information regarding this process, please see the general documentation for Next.js: https://nextjs.org/learn/basics/create-nextjs-app/setup

# Associated Repository
- **Statistical Analysis for E-PACERR Feedback:**  
  [https://github.com/lukeirwin03/epacerr-statistics-app](https://github.com/lukeirwin03/epacerr-statistics-app)
