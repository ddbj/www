# www, editing policies
## Rule: record the person who edited the file in the history log of each file.

## 'master' branch
* Basically, you should edit files only in ‘master’ branch. The edited files will be reflected from https://www.ddbj.nig.ac.jp every 10 minutes.
Before pushing the edited files to ‘master’ branch, you can make the edited html show within your local network area. In such a case, you need to install Jekyll on your computer by yourself.

## 'development' branch
* If you would like to pre-open the html through https://www-dev.ddbj.nig.ac.jp to show the edited pages to another member (incl. outside of NIG) and ask the review, you can edit and check on ‘development’ branch. The edited files will be reflected every 5 minutes. 
* All files under www-dev.ddbj.nig.ac.jp are not indexed by internet search engines, such as Google, Bing, etc.
* When you finish editing, you should **do ‘pull request’ in the direction from ‘development’ to ‘master’, and finally merge the edited files to ‘master’ branch.**

## Prohibited acts
* Do NOT leave the edited files for a long term in ‘development’ branch. 
* Do NOT directly write a file, who has been edited by other person, against ‘master’ branch.
