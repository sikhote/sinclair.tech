Last week I started researching what it would be like to code in an online editor. I'd tried this about 2-3 years ago, but it just didn't seem to click back then. I can't remember why not, but I think it was a combination of not knowing how to get most out of it and the tool not have all features I find necessary.

Anyhow, I tried it out again and after a few days I think I have it tuned to how I like. Here's what I did (these steps assume some familiarity with the terminal):

## Get an SSH key
This is so I could easily clone Git repositories, push changes, and have an easy outlet to the "outside world". Running the following commands will prompt you with some questions and eventually spit out an SSH key that can be pasted into GitHub for use.
```
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub
```

## ZSH and Ohmyzsh
I prefer ZSH over Bash for my shell. The two main reasons for this are the themes and the functionality that ZSH allows...mainly, being able to type in a partial command that I've previously run, hit up arrow, and see the full commands that match—I find this very handy. Here are some commands to get everything installed (this was using Ubuntu...installation on a different type of AWS Linux may vary):
```
sudo apt-get update
sudo apt-get install zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Got a theme? Somehow copy it over and use it! Assuming you have the theme file handy...
```
mkdir -p ~/.oh-my-zsh/custom/themes
yes | cp oxide.zsh-theme ~/.oh-my-zsh/custom/themes/oxide.zsh-theme
```
Next, I edit `.zshrc` so that I can add in some Zsh preferences and select the `oxide` theme that I like:
```
export ZSH="/home/$USER/.oh-my-zsh"

ZSH_DISABLE_COMPFIX="true"
DISABLE_AUTO_UPDATE="true"
DISABLE_AUTO_UPDATE="true"

ZSH_THEME="oxide"

plugins=(git)

source $ZSH/oh-my-zsh.sh

export EDITOR='vim'

alias gits="git status"
alias gita="git add -A"
alias gitc="git commit -m"
alias gitsac="git status && git add -A && git commit -m"
alias gitco="git checkout"
alias gitp="git pull origin"
alias gitpu="git push origin"
```
Finally, I append this to the `.bashrc` in the root directory, which enables ZSH on future terminals...this was the only way I got it to work...I tried some other methods:
```
zsh
```

Install nvm, node, yarn, & prettier (for editor)
Next, I installed a bunch Node related items that I use on a daily basis. NPM is already installed (yay), so I make sure the version I want is being used and then I instrall yarn as well. Pretier is needed globally installed because the Editor assumes it is available at the root level. I'm not a big fan, but it's better than not using it.
```
nvm install 14
nvm alias default 14
install yarn `npm install --global yarn
install yarn `npm install --global prettier
```

## Configure Git
Here are some quick commands I use to set up Git. You'll probably need to change these unless you are me from another timeline.
```
git config --global user.name "David Sinclair"
git config --global user.email "david@sinclair.tech"
git config pull.rebase false
```

## Random setup
I prefer Prettier over any other code formatter that I know of. To make it work for all JS files, I needed to copy the prettier command that is used for TypeScript into the JavaScript formatter area.

I also changed the font size slightly. It's a bit small at 12px.

I also added an elastic IP so that my AWS instance could be viewed at the same IP, even if the instance gets rebooted. You might think, why not always keep it running? Well, you pay for the time you are coding, so any time you are not for 30 minutes, the AWS instance shuts down. When it awakens, it will get a new IP...unless we pay a little extra for the permanent IP. Why do I need an IP at all or care? Well, a lot of my work is front end website development...so, when I am coding I need to see my changes. While I am coding I have a terminal running to continually show me an updated page (webpack is doing this). To see the changes, I want to be able to use my regular browser...so I need a IP address to do this. You may not need this yourself, but for UI development it's a must.

## Conclusion
I like having my development environment in a contained area that I don't need to worry about. If my PC/Mac breaks, I can hop to a new one an not skip a beat. It does require internet, but I can deal with that. I also prefer my laptop not needing to work so hard to compile webpack and do development things that rob my battery/cpu/memory use. So now, I have an AWS C9 editor in one browser window, my AWS instance IP pulled up in another window, and I code away. One downside is that if I want to code multiple sites at once, I would need to open another browser tab, spin up a new Cloud9 environment, and then get started. That was the reason I wanted to write down all the steps here...I usually have 2-3 projects running at once, so I figured I would need to really lock down the way in which I create C9 environments.