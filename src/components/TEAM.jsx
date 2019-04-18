import React from 'react';
import OurTeam from './OurTeam';


const execs = [
  {
    url: 'lead1.jpg',
    name: 'John Dingo',
    job: 'Senior Gondingu',
    description: "Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä vuosisataa, mutta myös loikan elektroniseen kirjoitukseen, jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen 1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum pätkiä, julkaistiin ja vielä myöhemmin tietokoneen julkistusohjelmissa, kuten Aldus PageMaker joissa oli versioita Lorem Ipsumista."
  },
  {
    url: 'lead2.jpg',
    name: 'Karen Bingermin',
    job: 'Lead Bagingi',
    description: 'Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer også tålt spranget over til elektronisk typografi uten vesentlige endringer. Lorem Ipsum ble gjort allment kjent i 1960-årene ved lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem Ipsum for dummytekst.'
  },

  {
    url: 'lead3.jpg',
    name: 'Jay bingus',
    job: 'Expert Expert',
    description: 'I motsetning til hva mange tror, er ikke Lorem Ipsum bare tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr., hvilket gjør det over 2000 år gammelt. Richard McClintock - professor i latin ved Hampden-Sydney College i Virginia, USA - slo opp flere av de mer obskure latinske ordene, consectetur, fra en del av Lorem Ipsum, og fant dets utvilsomme opprinnelse gjennom å studere bruken av disse ordene i klassisk litteratur. Lorem Ipsum kommer fra seksjon 1.10.32 og 1.10.33 i "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) av Cicero, skrevet i år 45 f.kr. Boken er en avhandling om teorier rundt etikk, og var veldig populær under renessansen. Den første linjen av Lorem Ipsum, "Lorem Ipsum dolor sit amet...", er hentet fra en linje i seksjon 1.10.32.'
  },

  {
    url: 'lead4.jpg',
    name: 'Ollue Ingo',
    job: 'Senior Mashinty',
    description: 'Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med på et eller annet vis. Det være seg innlagt humor eller tilfeldig genererte ord som ser langt fra troverdige ut. Skal man bruke avsnitt av Lorem Ipsum må man være sikker på at det ikke skjuler seg noe pinlig midt i teksten. Lorem Ipsum-generatorer på internett har en tendens til å repetere forhåndsdefinerte biter av tekst, noe som gjør dette til den første rettmessige generatoren på nett. Den bruker en samling av over 200 latinske ord, kombinert med en håndfull av setningsstrukturer, som sammen genererer Lorem Ipsum som ser fornuftig ut. Ferdiggenerert Lorem Ipsum er derfor alltid fri for repetisjon, innlagt humor, ugjenkjennlige ordformer osv.'

  },
  {
    url: 'lead5.jpg',
    name: 'David Lee Roth',
    job: 'Undeniable Lord',
    description: 'Det finnes mange ulike varianter av Lorem Ipsum, men majoriteten av disse har blitt tuklet med på et eller annet vis. Det være seg innlagt humor eller tilfeldig genererte ord som ser langt fra troverdige ut. Skal man bruke avsnitt av Lorem Ipsum må man være sikker på at det ikke skjuler seg noe pinlig midt i teksten. Lorem Ipsum-generatorer på internett har en tendens til å repetere forhåndsdefinerte biter av tekst, noe som gjør dette til den første rettmessige generatoren på nett. Den bruker en samling av over 200 latinske ord, kombinert med en håndfull av setningsstrukturer, som sammen genererer Lorem Ipsum som ser fornuftig ut. Ferdiggenerert Lorem Ipsum er derfor alltid fri for repetisjon, innlagt humor, ugjenkjennlige ordformer osv.'

  },
  {
    url: 'lead6.jpg',
    name: 'David Lee',
    job: 'Chief Creative Officer',
    description: 'As the Chief Creative Officer of Squarespace, David Lee leads the company’s award-winning creative team, whose work encapsulates all brand creative, web design, and product design efforts for the company. In 2017, he was named one of the Most Creative People in Business by Fast Company. Since joining Squarespace, David has master minded five Super Bowl campaigns. Prior to Squarespace, David served as Worldwide Digital Executive Creative Director of TBWA Worldwide and as a Creative Director at Wieden+Kennedy and AKQA. He graduated from RISD with a BFA in graphic design.'

  }
];
function Team() {

  console.log(execs)
  return(
    <div>
      {execs.map((person, index) =>
      <OurTeam   url={person.url}
        name={person.name}
        job={person.job}
        description={person.description}
        key={index}/>
    )}


    <style jsx> {`

          div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }

        `}</style>



    </div>
  );
}

export default Team;









// {marketSchedule.map((weekDay,index) =>
//   <Day day ={weekDay.day}
//     location={weekDay.location}
//     hours={weekDay.hours}
//     booth={weekDay.booth}
//     image={weekDay.image}
//     key={index}/>
// )}
