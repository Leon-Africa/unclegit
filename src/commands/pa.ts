import Command from '@oclif/command'
import { string } from '@oclif/command/lib/flags';
import cli from 'cli-ux'
import {exec} from "shelljs"


export class PA extends Command {
  static description = 'commit and push all changes'

  

  async run() {

    //Check git configured
    //git -C pwd rev-parse returns 0 for git repo
    //a value of zero defaults to false 

    let current_dir: string;

    //get current dir
    current_dir = exec(`git rev-parse --show-toplevel`);

    current_dir = JSON.stringify(current_dir);

    current_dir = current_dir.substring(0,current_dir.length - 3);

    current_dir += '/"'

    let result = exec(`git -C ${current_dir} rev-parse`)

    if(result.code) {
      this.error('Please first configure git i.e \n git config --global user.name "your name" \n git config --global user.email "your email\n Also ensure that you set the git credentials for your user \n https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage')
      }

    // prompt for commit message
    let commit_message = await cli.prompt('Enter your commit message')

    console.log(commit_message)

    commit_message = JSON.stringify(commit_message);

    if(commit_message === "" || commit_message === " " || commit_message === null){
      this.error('Error: Git commit message is required \n Please enter a commit message relevant to this commit')
    }

    //run the command
    try{
     exec(`git commit -a -m ${commit_message} && git push`);   
     this.warn("test") 
    }
    catch (e: unknown){ 
      if (typeof e === "string") {
         this.error(`${e.toUpperCase}`)
      } else if (e instanceof Error) {
        this.error(`${e.message}`)
      }

      this.error('Error: Git commit and push failed')
  }

      
  }
}