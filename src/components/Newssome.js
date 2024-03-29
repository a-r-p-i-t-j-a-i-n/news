import React, { Component } from 'react'
import Itemnews from './Itemnews'



export class Newssome extends Component {
    articles=[
        {
            "source": {
                "id": null,
                "name": "KMBC Kansas City"
            },
            "author": "Connor Hills",
            "title": "Kansas City Chiefs make swift work of the Chicago Bears in Week 3 win at Arrowhead - KMBC Kansas City",
            "description": "Couldn't catch the Chiefs Week 3 matchup with the Bears? We've got you covered with highlights, the biggest storylines and postgame press conferences",
            "url": "https://www.kmbc.com/article/live-game-score-chiefs-bears-week-3-kansas-city/45292323",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/ap26510b8d62834e.jpg?crop=1.00xw:0.846xh;0,0&resize=1200:*",
            "publishedAt": "2023-09-25T05:56:00Z",
            "content": "KANSAS CITY, Mo. —The Kansas City Chiefs made Swift work of the Chicago Bears in Week 3 at Arrowhead stadium.\r\nKansas City put away a struggling Chicago unit to improve to 2-1 on the season. \r\nQuarte… [+12859 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Samantha Chery, Michael Cavna",
            "title": "WGA, AMPTP reach agreement to end writers strike - The Washington Post",
            "description": "Thousands of Writers Guild of America members must ratify the contract union negotiators and studios agreed to in order to get TV and film writers working.",
            "url": "https://www.washingtonpost.com/entertainment/2023/09/24/writers-strike-agreement-wga-amptp/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/E3J7OODDRVDBVC7ZG23XGSWWTA_size-normalized.JPG&w=1440",
            "publishedAt": "2023-09-25T05:48:00Z",
            "content": "Comment on this story\r\nComment\r\nNegotiators for Hollywood studios and the Writers Guild of America reached a breakthrough agreement after five straight days of negotiations a tentative deal to end a … [+5862 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Steve Gorman, Maria Caspani",
            "title": "NASA asteroid sample parachutes safely onto Utah desert - Reuters",
            "description": "A NASA space capsule carrying the largest soil sample ever scooped up from the surface of an asteroid streaked through Earth's atmosphere on Sunday and parachuted into the Utah desert, delivering the celestial specimen to scientists.",
            "url": "https://www.reuters.com/science/nasas-first-asteroid-sample-parachutes-into-utah-desert-2023-09-24/",
            "urlToImage": "https://www.reuters.com/resizer/ErcYej4MKgEAEtm7ERhaBVJlFMM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NIGE7JVTOZO5DFBBH432VUU77I.jpg",
            "publishedAt": "2023-09-25T05:41:00Z",
            "content": "Sept 24 (Reuters) - A NASA space capsule carrying the largest soil sample ever scooped up from the surface of an asteroid streaked through Earth's atmosphere on Sunday and parachuted into the Utah de… [+4687 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Mitchell McCluskey, Ashley R. Williams",
            "title": "Powerball jackpot grows to $785 million, fourth-largest prize in history - CNN",
            "description": "Lottery players have another chance to win big on Monday after the Powerball jackpot grew to a record-breaking $785 million.",
            "url": "https://www.cnn.com/2023/09/24/us/powerball-jackpot-lottery-amount-millions/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230924133038-powerball-jackpot-lottery-amount-millions.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-25T04:20:00Z",
            "content": "Lottery players have another chance to win big on Monday after the Powerball jackpot grew to a record-breaking $785 million.\r\nThe prize became the fourth largest in history after Saturdays drawing pr… [+1177 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jared Formanek",
            "title": "6 people dead, including 3 children, after a train hit an SUV, smashing it ‘like a soft drink can,’ Florida sheriff says - CNN",
            "description": "Six people are dead, including three children, after a train struck an SUV as it crossed railroad tracks in Hillsborough County, Florida, Saturday evening, according to the sheriff’s office.",
            "url": "https://www.cnn.com/2023/09/24/us/florida-hillsborough-train-hits-vehicle/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230924151510-02-florida-hillsborough-train-hits-vehicle.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-25T04:12:00Z",
            "content": "Six people are dead, including three children, after a train struck an SUV as it crossed railroad tracks in Hillsborough County, Florida, Saturday evening, according to the sheriffs office.\r\nResponde… [+3309 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/tara-subramaniam\">Tara Subramaniam</a>, CNN",
            "title": "Live updates: Russia's war in Ukraine - CNN",
            "description": "Russian shelling killed three people and wounded at least seven others Sunday in the southern Zaporizhzhia and Kherson regions, Ukrainian officials said. Follow here for live updates.",
            "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-09-25-23/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230924131014-andriivka-09162023-super-tease.jpg",
            "publishedAt": "2023-09-25T04:10:00Z",
            "content": "Pope Francis on Saturday told journalists that the withholding of weapons to Ukraine is turning the Ukrainian people into \"martyrs.\"\r\nThe Pope made the comments during a news conference on a flight b… [+1327 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Pittsburgh Steelers vs. Las Vegas Raiders | 2023 Week 3 Game Highlights - NFL",
            "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
            "url": "https://www.youtube.com/watch?v=ce-Jbe-p0ow",
            "urlToImage": "https://i.ytimg.com/vi/ce-Jbe-p0ow/maxresdefault.jpg",
            "publishedAt": "2023-09-25T03:57:05Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Alli Rosenbloom",
            "title": "Taylor Swift cheers on Travis Kelce at Kansas City Chiefs game - CNN",
            "description": "It’s a love story, perhaps, for NFL tight end Travis Kelce and Taylor Swift, who was seen in Kelce’s family suite at Sunday’s game between the Kansas City Chiefs and the Chicago Bears.",
            "url": "https://www.cnn.com/2023/09/24/entertainment/taylor-swift-travis-kelce-chiefs-game/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230924170550-taylor-swift-chiefs-092423.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-25T03:52:00Z",
            "content": "Its a love story, perhaps, for NFL tight end Travis Kelce and Taylor Swift, who was seen in Kelces family suite at Sundays game between the Kansas City Chiefs and the Chicago Bears. \r\nThe singer was … [+1627 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "David Shepardson",
            "title": "Ford says 'significant gaps' remain in UAW labor contract talks - Reuters",
            "description": "Ford Motor <a href=\"https://www.reuters.com/markets/companies/F.N\" target=\"_blank\">(F.N)</a> said on Sunday that despite progress in some areas, it still has \"significant gaps to close\" on key economic issues before it can reach a new labor agreement with the…",
            "url": "https://www.reuters.com/business/autos-transportation/ford-says-significant-gaps-remain-reach-uaw-contract-deal-2023-09-25/",
            "urlToImage": "https://www.reuters.com/resizer/BFpqqYmq3wNV4dCXwRB2ddc7a1g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NCCYZKFBBBOD5PR6VNZ6DZD6XQ.jpg",
            "publishedAt": "2023-09-25T03:37:00Z",
            "content": "Sept 24 (Reuters) - Ford Motor (F.N) said on Sunday that despite progress in some areas, it still has \"significant gaps to close\" on key economic issues before it can reach a new labor agreement with… [+2057 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Manoj Kumar",
            "title": "Punjab's Sikhs fear Canada-India row threatens them at home, abroad - Reuters",
            "description": "A bitter row between India and Canada over the murder of a Sikh separatist is being felt in Punjab, where some Sikhs fear both a backlash from India's Hindu-nationalist government and a threat to their prospects for a better life in North America.",
            "url": "https://www.reuters.com/world/punjabs-sikhs-fear-canada-india-row-threatens-them-home-abroad-2023-09-25/",
            "urlToImage": "https://www.reuters.com/resizer/hgvcsvSnC37BgZ1SmYuVGEhKG50=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AH57PJPIE5NSTHQESICSNABIN4.jpg",
            "publishedAt": "2023-09-25T02:26:06Z",
            "content": "BHARSINGHPURA, India, Sept 25 (Reuters) - A bitter row between India and Canada over the murder of a Sikh separatist is being felt in Punjab, where some Sikhs fear both a backlash from India's Hindu-… [+4289 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5google.com"
            },
            "author": "Abner Li",
            "title": "Pixel 8, 8 Pro, and Pixel Watch 2 pricing for the UK has leaked - 9to5Google",
            "description": "Following the US this morning, UK pricing for the Pixel 8 and 8 Pro, as well as the Pixel Watch 2, has leaked...",
            "url": "https://9to5google.com/2023/09/24/pixel-8-watch-2-uk-price/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/09/pixel-watch-2-black-leak.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-25T01:31:00Z",
            "content": "Following the US this morning, UK pricing for the Pixel 8 and 8 Pro, as well as the Pixel Watch 2, has leaked.\r\nAccording to Roland Quandt on X (formerly Twitter), the UK base price for the Pixel 8 i… [+816 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Anumita Kaur",
            "title": "Canada lawmaker apologizes for praising Ukrainian who fought for Nazis - The Washington Post",
            "description": "Canada’s House of Commons Speaker Anthony Rota apologized Sunday for honoring Yaroslav Hunka, 98, who fought for a Nazi unit during World War II.",
            "url": "https://www.washingtonpost.com/world/2023/09/24/canadian-speaker-apologizes-ukrainian-nazi/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XF52ROHNHCHF622KYY4VLL37TE.jpg&w=1440",
            "publishedAt": "2023-09-25T01:28:42Z",
            "content": "Comment on this story\r\nComment\r\nThe lawmaker presiding over Canadas lower house of Parliament issued an apology Sunday after he said he became aware that the man he had celebrated during a Ukrainian … [+3794 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Fox News",
            "title": "Jamaica declares Dengue fever outbreak with hundreds of confirmed and suspected cases - New York Post ",
            "description": "Health officials say at least 6 deaths are being investigated in Jamaica, although none yet linked to dengue.",
            "url": "https://nypost.com/2023/09/24/jamaica-declares-dengue-fever-outbreak-with-hundreds-of-confirmed-and-suspected-cases/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000043962038.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-09-25T00:52:00Z",
            "content": "Health officials in Jamaica have declared an outbreak of the dengue fever Saturday with at least 565 suspected, presumed and confirmed cases in the Caribbean nation. \r\nJamaicas Ministry of Health and… [+2134 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "NFL Week 3 grades: Dolphins earn 'A+' for scoring 70, Cowboys get an 'F' after upset loss to Cardinals - CBS Sports",
            "description": "Here are the Week 3 grades for every team",
            "url": "https://www.cbssports.com/nfl/news/nfl-week-3-grades-dolphins-earn-a-for-scoring-70-cowboys-get-an-f-after-upset-loss-to-cardinals/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/24/28a27624-489b-48cb-90c3-fb72f66665ae/thumbnail/1200x675/53014de702e7718ac654a6864a9dd374/dolphins-win-g.jpg",
            "publishedAt": "2023-09-25T00:46:00Z",
            "content": "Welcome to the Week 3 grades!\r\nThe third week of the season has suddenly turned into one of the wildest weeks in NFL history, and that's mostly thanks to the Miami Dolphins, who scored 70 POINTS agai… [+2230 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Charean Williams",
            "title": "Texans CB Shaq Griffin tells Jaguars, \"I bet y'all miss me\" - NBC Sports",
            "description": "Texans cornerback Shaquill Griffin spent two seasons in Jacksonville.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/texans-cb-shaq-griffin-tells-jaguars-i-bet-yall-miss-me",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/eb0843a/2147483647/strip/true/crop/5592x3146+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F9b%2F85%2F598a1ac74a6e8f4cde4bb7e28486%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1699082834",
            "publishedAt": "2023-09-25T00:20:37Z",
            "content": "Texans cornerback Shaquill Griffin spent two seasons in Jacksonville. He didnt like the way it ended and made Sundays game personal.\r\nGriffin got close enough to the Jaguars sideline to talk trash to… [+1539 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Lauren Kaori Gurley, Jeanne Whalen, Erica Werner, Wali Khan",
            "title": "Democrats embrace Biden's upcoming visit to Michigan UAW picket lines - The Washington Post",
            "description": "Rep. Alexandria Ocasio-Cortez (D-N.Y.) applauded Biden’s trip — which labor experts believe will be the first by a sitting president in at least 100 years — as a “historic event.”",
            "url": "https://www.washingtonpost.com/business/2023/09/24/uaw-strike-updates-biden/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XRMIDSDSXJD23FET3QQRNURA5U_size-normalized.JPG&w=1440",
            "publishedAt": "2023-09-24T21:28:00Z",
            "content": "Comment on this story\r\nComment\r\nAs strikes against the Big Three Detroit automakers enter their 10th day Sunday, Democrats are praising a visit by President Biden to Michigan, scheduled for Tuesday, … [+8602 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Nagorno-Karabakh: Ethnic Armenians leave amid cleansing fear - BBC",
            "description": "Azerbaijan took full control of the territory in a flash operation, saying it would integrate residents.",
            "url": "https://www.bbc.com/news/world-europe-66905581",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0BD0/production/_131242030_f943f42957dbdd3217297ac512e0b4c35a92a7af0_0_5062_34401000x680.jpg",
            "publishedAt": "2023-09-24T21:19:50Z",
            "content": "Armenia says 1,050 people have crossed into the country from Nagorno-Karabakh, days after the majority ethnic Armenian enclave was seized by Azerbaijan.\r\nThey entered after the government in Yerevan … [+3249 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "James Powel",
            "title": "Ophelia's storm path floods mid-Atlantic coast. See aftermath photos. - USA TODAY",
            "description": "Tropical Storm Ophelia's path left flooded streets and power outages in its wake. See its impact in North Carolina, New Jersey and Delaware.",
            "url": "https://www.usatoday.com/story/news/nation/2023/09/24/tropical-storm-ophelia-impact-photos/70954240007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/23/PWIL/70948672007-092323-ophelia-at-the-beacheswb-341934.jpg?crop=3991,2245,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-09-24T20:44:50Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Katelyn Polantz, Kaanita Iyer, Shawna Mizelle",
            "title": "Cassidy Hutchinson defends herself in first post-testimony TV interview - CNN",
            "description": "Cassidy Hutchinson, the former Trump White House aide who delivered bombshell testimony to the House committee investigating the January 6 insurrection, defended the anecdotes she recounted under oath in her first TV interview since her Capitol Hill testimony.",
            "url": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/357400/357408.10.jpg",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230924105241-cassidy-hutchinson-file-2022.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-24T20:02:00Z",
            "content": "Cassidy Hutchinson, the former Trump White House aide who delivered bombshell testimony to the House committee investigating the January 6 insurrection, defended the anecdotes she recounted under oat… [+3386 chars]"
        }
    ]
    constructor(){
        super();
        console.log("i am constuctor")
        this.state={
            articles:this.articles,
            loading:false,
            page: 1
        }
    }
    async componentDidMount(){
   let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=114fe0febfea47498e60ef318207c816"
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        this.setState({articles:parsedata.articles})
    }
    handlenext=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=114fe0febfea47498e60ef318207c816&page=${this.state.page+1}`
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        // this.setState({})
        this.setState({
            page:this.state.page+1,
            articles:parsedata.articles
        })
    }
    handleprev=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=114fe0febfea47498e60ef318207c816&page=${this.state.page-1}`
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        // this.setState({})
        this.setState({
            page:this.state.page-1,
            articles:parsedata.articles
        })
    }
  render() {
    return (
      <div className="container my-3">
       <h2>News- Top Headlines</h2>
       
       <div className='row'>
       {this.state.articles.map((element)=>{
       return  <div className='col-md-3' key={element.url}>
<Itemnews key={element.url} title={element.title} description={element.description} Imageurl={element.urlToImage} />
</div>

       })}

    
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} onClick={this.handleprev} type="button" class="btn btn-dark">Previous</button>
      <button type="button" disabled={this.state.page>=this.page} onClick={this.handlenext} class="btn btn-dark">Next</button>
      </div>
      </div>
    )
  }
}

export default Newssome