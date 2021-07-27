import Command from '@oclif/command'
import cli from 'cli-ux'
import {exec} from 'shelljs'

export class RCU extends Command {
  static description = 'Perform a rebase';

  async run() {
    // Check git configured
    // git -C pwd rev-parse returns 0 for git repo
    // a value of zero defaults to false

    let current_dir: string
    let current_branch: string

    // get current dir
    current_dir = exec('git rev-parse --show-toplevel')

    current_dir = JSON.stringify(current_dir)

    current_dir = current_dir.substring(0, current_dir.length - 3)

    current_dir += '/"'

    const result = exec(`git -C ${current_dir} rev-parse`)

    if (result.code) {
      this.error('Please first configure git i.e \n git config --global user.name "your name" \n git config --global user.email "your email\n Also ensure that you set the git credentials for your user \n https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage')
    }

    // prompt for parent branch
    const rebase_warning = await cli.prompt('ARE YOU ARE ON A FEATURE BRANCH WHERE YOU WANT TO UPDATE COMMIT/S (Y or N)?')
    // rebase_warning = JSON.stringify(rebase_warning).split('')[1]

    if (rebase_warning === 'N' || rebase_warning === 'n') {
      this.error('Please ensure that you change to a feature branch in order to use this command safely')
    } else if (rebase_warning === 'Y' || rebase_warning === 'y') {
      const push_warning = await cli.prompt('ARE YOU THE ONLY PERSON WORKING ON THIS FEATURE BRANCH (Y or N)?')

      if (push_warning === 'N' || push_warning === 'n') {
        this.error('Please ensure you are working on YOUR OWN FEATURE BRANCH to use this command safely')
      } else if (push_warning === 'Y' || push_warning === 'y') {
        // prompt for parent branch
        let parent_branch = await cli.prompt('What is the parent branch for the branch you are currenlty on?')

        parent_branch = JSON.stringify(parent_branch)

        if (parent_branch === '' || parent_branch === ' ' || parent_branch === null) {
          this.error('Error: Please specify the parent branch to use this command')
        }

        // run the command
        try {
          exec(`git rebase -i ${parent_branch}`)

          // get current branch
          current_branch = exec('git branch --show-current')
          current_branch = JSON.stringify(current_dir)
          current_branch = current_branch.substring(0, current_branch.length - 3)
          current_branch += '/"'

          // perform the push to the feature branch
          exec(`git push ${current_branch} --force`)
          this.error('NOT AN ERROR -> Succesfully perfrom rebase.')
        } catch (error) {
          exec('git rebase abort')
          this.error(`${error}`)
        }
      }
    } else {
      this.error('Please ensure that you enter either Y or N')
    }
  }
}
