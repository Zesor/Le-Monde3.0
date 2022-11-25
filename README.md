# :mortar_board: Starton/Binance/Ledger Hackaton
## :trophy: Goal of the Hackaton
:heavy_check_mark: Make a decentralized Web App so, journalists and media can avoid censorship.

## French Persona

Today, the __blockchain__ is used in different areas : finance, health, art..., but it can be complicated to apprehend it and to use it.

Our company, __STAIVM__, made up of IT students is very interested in the world of blockchain and web3, who offers new possibilities which go far beyond our imagination. We decided to make up a project that accelerate the transition from web2 to web3, for a decentralized future.

--------------------------------------------------------------------------------------------------------------------------------------------------

## Contextualisation

>Our solution is based on the idea of avoiding censorship in the __media__ and __journalism__. 📰 📺 🎥

First, we need to define what is __censorship__.

__Censorship__ 😶 occurs when individuals or groups try to prevent others from saying, printing, or depicting words and images. Censors <br />
seek to limit freedom of thought and expression by restricting spoken words, printed matter or symbolic messages.

Having access to information is important, but it's important too to watch out who is in control of the media that we take information from.
<br />For exemple, in France 🇫🇷, 9 billionaires own 90 % of the big media. [(Source)](https://www.liberation.fr/checknews/est-il-vrai-que-90-des-grands-medias-appartiennent-a-neuf-milliardaires-20220227_7J3H2INMD5GOPBN7YJ77C33KRY/) Some of those media have a political orientation.

But most of the time, consors are governements that are not that much democratic. The first exemple that we can think of is China 🇨🇳, who censors internet, journalists, media etc..

Some journalists are censored or/and disapear after exposing a situation in the country, for exemple, there is a Chinese Citizen Journalist Who Documented Covid-19 in Wuhan Resurfaced after 600 days. [(Source)](https://www.wsj.com/articles/chinese-citizen-journalist-who-documented-covid-19-in-wuhan-resurfaces-after-600-days-11633077956)

This is why we decided to create our platform, to allow journalists 🕵️‍♂️ to publish an article about whatever topic they want to talk about, without being censored, without getting to jail or even worse. With our platform, they are safe and free.

To do it, we used __IPFS__ (InterPlanetary File System), protocol. Hypermedia and file 📁 sharing peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting IPFS hosts.

IPFS is __THE__ technology to resolve our censorship problem because it's..... ⚠️

--------------------------------------------------------------------------------------------------------------------------------------------------

## Workflow

To create our Web App, we used React.Js.

A journalist or a media can publish an article. They have to connect themselves with MetaMask :fox_face:. <br />
<br />
__MetaMask__ is a software cryptocurrency wallet used to interact with the Ethereum blockchain for example. It allows users to access their wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.
<br /><br /> 
* Articles can't be censured. :policeman: <br /> 
* Lectors have to pay to read an article. :euro: <br /> 
* Publishers are rewarded by our token. :chart: <br />

Our biggest issue was the __buisness model__. We first didn't knew how to approach it. Does the publisher have to pay to publish an article or no? We first tought of a subscription model, does the lector pay for each article they read?

To resolve this issue, we asked the Starton team. They helped us by giving us advices.

We finally choosed to make the lector pay for each article they read, the publisher choose the amount that the lector has to pay, and he is rewarded from it with our token : STVM, deployed with the starton API. Our platform takes a __commission__ on this. :moneybag:

If the lector has a favorite journalists or media, he can subscribe to them, they fix the amount to subscribe to their publication/articles.

:arrow_up: All of what we seen previoulsy is the v1 of our web App. For v2 we would like to put decentralized id's, distributed database. We would like also to add an important feature: possibility to buy our token via sepa bank transfer. 

We would like to host our front end on IPFS, and UCAN for v3.

Our solution is fully __decentralized__, we do not collect users data. Neither the blockchain :chains:, the smart contract :spiral_notepad: or the wallet :mailbox_closed: are stored, treated or analized by our back end.

For a better understanding, we invite you to visualise this [explanatory video](https://drive.google.com/file/d/1fkmYWmISnj8Vsye0-JDEE5oHbVOu1w8p/view) :play_or_pause_button: that we made.

--------------------------------------------------------------------------------------------------------------------------------------------------

## Steps

➡️ __Step 1__:<br />
The user can consult the website and read the free articles whithout being logged in.

➡️ __Step 2__:<br />
The user connect himself with his MetaMask account.

➡️ __Step 3__:<br />
The user can buy an article to read it.

➡️ __Step 4__:<br />
He can publish an article, and fix the amount the lector has to pay to access it. 
For example, it can be 0$ or 200$ worth of STVM.

<br />There is a [DEMO](https://drive.google.com/file/d/17a8oHl-GusAtjVyHCH2KupmGyg_hsRli/view) :play_or_pause_button:

--------------------------------------------------------------------------------------------------------------------------------------------------

## Built With

* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/docs/)
* [PostgresSQL](https://www.postgresql.org/docs/)
* [JS-IPFS](https://js.ipfs.tech/)
* [Solidity](https://docs.soliditylang.org/en/v0.8.13/)
* [Starton](https://www.starton.io/)
* [BNB Chain](https://www.bnbchain.org/en)

--------------------------------------------------------------------------------------------------------------------------------------------------

## Installation :arrow_down:
### Go to [SETUP.md](https://github.com/Zesor/Le-Monde3.0/blob/main/SETUP.md)

--------------------------------------------------------------------------------------------------------------------------------------------------

## License

Distributed under MIT license, see [``` LICENSE ```](https://github.com/Zesor/Le-Monde3.0/blob/main/LICENSE) for more informations.

--------------------------------------------------------------------------------------------------------------------------------------------------

## Contact us

Valentin Fouillet valentin.fouillet@epitech.eu

Illyas Chihi illyas.chihi@epitech.eu

Antoine Gavira-Bottari antoine.gavira-bottari@epitech.eu

Mohammed Chihi mohammed.chihi@epitech.eu

Thomas Willson thomas.willson@epitech.eu

Silya.Nait silya.nait@epitech.eu
