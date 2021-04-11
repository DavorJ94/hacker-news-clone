# Hacker News Clone

Hacker News Clone created with React framework.

Styles are mainly taken directly from the official website using Chrome Dev Tools: https://news.ycombinator.com/.

APIs that are used for clone creation are the following:  
https://node-hnapi.herokuapp.com - base url  
Endpoints:  
/news - Top  
/newest - New  
/ask - Ask  
/show - Show  
/item/[*id of certain story here*]- Comments  

Personal improvement: While working on the clone, apart from working with APIs, I realized how important warnings about unique keys for each mapped element are. At first I accidentally set it up so the key is index of element, but because of multiple page renderings, that wasn't unique. Therefore, when validating that certain stories are added to favorites, on each page stories by the same order were rendered as added to favorites, even, though, those weren't added. The problem was fixed as soon as I set up the key for each rendered element as id for that element provided by the appropriate API.

Let me know if you think that there is anything I can improve in the overall clone creation. Styles were not the main focus.
