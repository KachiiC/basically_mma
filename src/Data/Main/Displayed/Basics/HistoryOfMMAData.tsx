const HistoryOfMMAData = [
    {
        year: 1993,
        event: "THE UFC IS FOUNDED THE USA",
        content: "WOW Promotions and SEG produced the first event, later called UFC 1, at McNichols Sports Arena in Denver, Colorado on November 12, 1993. Art Davie functioned as the show's booker and matchmaker. The show proposed to find an answer which martial arts is the best."
    },
    {
        event: "PRIDE FC IS FOUNDED IN JAPAN",
        year: 1997,
        content: "The first event, held at the Tokyo Dome on October 11, 1997, and organised by Hiromichi Momose, Naoto Morishita and Nobuyuki Sakakibara from KRS (Kakutougi Revolutionary Spirits) promotion, attracted 47,000 fans, as well as Japanese mass media attention."
    },
    {
        event: "ISCF FOUNDED AS FIRST SANCTIONING BODY OF MMA",
        year: 1999,
        content: "The International Sport Combat Federation (ISCF) was created in May 1999 as the worlds first “MMA” Sanctioning body. This ushered in a new era of Mixed Martial Arts where it was once again recognized as a true sport worldwide."
    },
    {
        event: "NJSACB DEVELOPS UNIFIED RULES",
        year: 2001,
        content: "NJSACB develops Unified Rules On April 3, 2001, the New Jersey Sate Atletics commission board held a meeting to discuss the regulation of mixed martial arts events. At this meeting, the proposed uniform rules were agreed upon by the NJSACB, several other regulatory bodies, numerous promoters of mixed martial arts events and other interested parties in attendance. All parties in attendance were able to agree upon a uniform set of rules to govern the sport of mixed martial arts."
    },
    {
        event: "ZUFFA BUYS THE UFC",
        year: 2001,
        content: "Zuffa buys UFC It was founded in January 2001 in Las Vegas, Nevada, by Station Casinos executives Frank Fertitta III and Lorenzo Fertitta to be the parent entity of the Ultimate Fighting Championship (UFC) after they purchased it from the Semaphore Entertainment Group."
    },
    {
        event: "THE ULTIMATE FIGHTER DEBUTS",
        year: 2005,
        content: "The Ultimate Fighter debuts The UFC debuts the reality show on spike TV. The historic Forrest Griffin vs. Stephan Bonnar fight in the first season drew millions of viewers to the show and launched the sport into the mainstream. Because of this success, The Ultimate Fighter was regarded as instrumental to the survival and expansion of the UFC and mixed martial arts into the mainstream."
    },
    {
        event: "UFC 66 SELL OVER A MILLION PPV",
        year: 2006,
        content: "The once ban from pay-per-view show achieved 1 million ppv buys with the marquee event Liddell vs Ortiz"
    },
    {
        event: "ZUFFA BUYS PRIDE FC",
        year: 2007,
        content: "Zuffa began to buy it's MMA competitors including the WEC and Pride. Whilst WEC remained its own entity, fighters from Pride FC such as Wanderlei Silva, Dan Henderson and Shogun Rua were brought in to compete against the top fighters in the UFC."
    },
    {
        event: "WEC MERGES WITH THE UFC",
        year: 2011,
        content: "Zuffa finally merges the WEC with the UFC and introducing the Bantamweight and Featherweight divisions into the UFC, promoting Domonick Cruz and Jose Aldo to UFC Champions."
    },
    {
        event: "The UFC DEBUTS ON FOX",
        year: 2011,
        content: "After signing a seven year deal in August 2011, the UFC broadcasted its first show on FOX. The deal was significant as it marked the first time that the UFC would televise its events on terrestrial television in the United States. The first fight was between the heavyweight champion Cain Velasquez and Junior dos Santos."
    },
    {
        event: "The IMMAF IS FOUNDED",
        year: 2012,
        content: "The International Mixed Martial Arts Federation (IMMAF) was founded on 29 February as the international governing body for amateur. IMMAF serves as a democratic hub for national MMA federations and supports the growth of regulation and sport safety globally by aiding countries in the formation of federations where none exist."
    },
    {
        event: "STRIKEFORCE MERGES WITH THE UFC",
        year: 2013,
        content: "After Zuffa purchased strikeforce, a few mma stars such as Nick Diaz and Alistar Overeem moved over to the UFC. After remaining seperate for years, Zuffa finally merged Strikeforce with the UFC. Future UFC champions including Ronda Rousey, Daniel Cormier, Luke Rockhold, Tyron Woodley and Robbie Lawler moved over to the UFC as a result of this merger."
    },
    {
        event: "FIRST UFC WOMEN'S FIGHT",
        year: 2013,
        content: "After merging with Strikeforce, the UFC promote Ronda Rousey as the first Bantamweight champion. At UFC 157, Ronda Rousey defeats Liz Carmouche in the first women's UFC fight."
    },
    {
        event: "UFC ANNOUNCE PARTNERSHIP WITH USADA",
        year: 2015,
        content: "The UFC announced its partnership with United States Anti-Doping Agency (USADA). The UFC USADA testing program became effective on July 1, 2015, and includes a minimum of 2,750 drug tests per year with an average of five tests per fighter, and punishments to fighters who fail the tests."
    },
    {
        event: "UFC ANNOUNCE PARTNERSHIP WITH REEBOK",
        year: 2015,
        content: "The UFC announce a five year deal with Reebok. All UFC fighters are required to wear Reebok equipment during their fights."
    },
    {
        event: "BAN ON MMA LIFTED IN STATE OF NEW YORK",
        year: 2016,
        content: "On March 22, 2016, the New York State Assembly voted to lift the State's 1997 ban on MMA and on April 14, 2016 Governor Cuomo signed the bill legalizing and regulating the sport into law. The first show since the ban was headlined by Eddie Alvarez and Conor McGregor."
    },
    {
        event: "WMG/WME-IMG BUYS UFC FOR US$4 BILLION",
        year: 2016,
        content: "On July 11, 2016, Zuffa announced that it would be purchased by a group led by WME-IMG including Silver Lake Partners, Kohlberg Kravis Roberts and MSD Capital for the price of $4.025 billion."
    },
    {
        event: "THE NEW UNIFIED RULES OF MMA INTRODUCED",
        year: 2017,
        content: "The new unified rules of MMA introduced The new unified rules were introduced with changes to the extending fingers towards Opponents' Eyes, what consitutes a grounded opponent and a new scoring system."
    },
    {
        event: "UFC 229 BREAKS PPV RECORD WITH 2.4 MILLION BUYS",
        year: 2018,
        content: "The UFC break 2 million PPV with the highly anticipated match between Conor McGregor and newly crowned undefeated champion Khabib Nurmagomedov. This PPV still holds the current record for PPV buys."
    },
    {
        event: "UFC AND ONE CHAMPIONSHIP MAKE FIRST FIGHTER TRADE IN THE SPORTS HISTORY",
        year: 2018,
        content: "The UFC and One Championship trade Demetrious Johnson (the record holder for UFC title defences) for Ben Askren (the undefeated olympic wrestler). This trade was the first in the sports history."
    },
    {
        event: "FIRST UFC SHOW BROADCASTED ON ESPN",
        year: 2019,
        content: "First UFC show broadcasted on ESPN Following the experation of their deal with FOX, the UFC signed a broadcasting deal with ESPN in 2018 and the first show broadcasted on their ESPN+ was the flyweight champion Henry Cejudo's first title defence against UFC bantamweight champion Tj Dillashaw."
    }
]

export default HistoryOfMMAData
