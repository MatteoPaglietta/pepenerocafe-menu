import belliniImage from '../assets/immagini-drink/bellini.png';
import cosmopolitanImage from '../assets/immagini-drink/cosmopolitan.png';
import ginFizzImage from '../assets/immagini-drink/gin-fizz.png';
import ginTonicImage from '../assets/immagini-drink/gin-tonic.png';
import margaritaImage from '../assets/immagini-drink/margarita.png';
import mojitoImage from '../assets/immagini-drink/mojito.png';
import moscowMuleImage from '../assets/immagini-drink/moscow-mule.png';
import pinacoladaImage from '../assets/immagini-drink/pinacolada.png';
import rossiniImage from '../assets/immagini-drink/rossini.png';
import spritzVenturoImage from '../assets/immagini-drink/spritz/spritz-venturo.png';
import spritzViolaImage from '../assets/immagini-drink/spritz/spritz-viola.png';
import spritzFragolaImage from '../assets/immagini-drink/spritz/spritz-fragola.png';
import spritzZenzeroImage from '../assets/immagini-drink/spritz/spritz-zenzero.png';
import spritzLimoneImage from '../assets/immagini-drink/spritz/spritz-limone.png';
import hugoImage from '../assets/immagini-drink/spritz/spritz-hugo.png';
import spritzFruttiBoscoImage from '../assets/immagini-drink/spritz/spritz-fruttibosco.png';
import spritzRosaImage from '../assets/immagini-drink/spritz/spritz-rosa.png';
import spritzEsoticoImage from '../assets/immagini-drink/spritz/spritz-esotico.png';
import spritzChinottoImage from '../assets/immagini-drink/spritz/spritz-chinotto.png';
import negritoImage from '../assets/immagini-drink/negrito.png';
import negroniSbagliatoImage from '../assets/immagini-drink/negroni-sbagliato.png';

import spericoladaImage from '../assets/immagini-drink/spericolada.png';
import pescacoladaImage from '../assets/immagini-drink/pescacolada.png';
import virgincoladaImage from '../assets/immagini-drink/virgincolada.png';

//Rum Images
import brugalImage from '../assets/immagini-drink/rum/brugal.jpg';
import pamperoImage from '../assets/immagini-drink/rum/pampero.jpg';
import havanaImage from '../assets/immagini-drink/rum/havana.jpg';
import matusalemImage from '../assets/immagini-drink/rum/matusalem.jpg';
import florDeCanaImage from '../assets/immagini-drink/rum/flor-de-cana.jpg';
import ronMieleImage from '../assets/immagini-drink/rum/ron-miele.jpg';
import zacapaImage from '../assets/immagini-drink/rum/zacapa.jpg';
import diplomaticoImage from '../assets/immagini-drink/rum/diplomatico.jpg';

//Gin Images
import tanqueray00Image from '../assets/immagini-drink/gin/tanqueray-0.jpg';
import tanquerayImage from '../assets/immagini-drink/gin/tanqueray.jpg';
import tanqueraySevillaImage from '../assets/immagini-drink/gin/tanqueray-sevilla.jpg';
import barbersImage from '../assets/immagini-drink/gin/barbers.jpg';
import bombayImage from '../assets/immagini-drink/gin/bombay.jpg';
import bordigaImage from '../assets/immagini-drink/gin/bordiga.jpg';
import bulldogImage from '../assets/immagini-drink/gin/bulldog.jpg';
import citadelleImage from '../assets/immagini-drink/gin/citadelle.jpg';
import elephantImage from '../assets/immagini-drink/gin/elephant.jpg';
import etsuImage from '../assets/immagini-drink/gin/etsu.jpg';
import fiftyPoundsImage from '../assets/immagini-drink/gin/fifty-pounds.jpg';
import haymansImage from '../assets/immagini-drink/gin/haymans.jpg';
import hendricksImage from '../assets/immagini-drink/gin/hendricks.jpg';
import malfyAranciaImage from '../assets/immagini-drink/gin/malfy-arancia.jpg';
import malfyLimoneImage from '../assets/immagini-drink/gin/malfy-limone.jpg';
import malfyPompelmoImage from '../assets/immagini-drink/gin/malfy-pompelmo.jpg';
import malfyImage from '../assets/immagini-drink/gin/malfy.jpg';
import mareImage from '../assets/immagini-drink/gin/mare.jpg';
import mazzettiImage from '../assets/immagini-drink/gin/mazzetti.jpg';
import mombasaImage from '../assets/immagini-drink/gin/mombasa.jpg';
import monkeyImage from '../assets/immagini-drink/gin/monkey.jpg';
import n0Image from '../assets/immagini-drink/gin/n-0.jpg';
import nordesImage from '../assets/immagini-drink/gin/nordes.jpg';
import londoN1Image from '../assets/immagini-drink/gin/london-n1.jpg';
import xoriguerImage from '../assets/immagini-drink/gin/xoriguer.jpg';
import portobelloImage from '../assets/immagini-drink/gin/portobello.jpg';
import rokuImage from '../assets/immagini-drink/gin/roku.jpg';
import tanquerayRangpurImage from '../assets/immagini-drink/gin/tanqueray-rangpur.jpg';

// Wine Images
import arneisImage from '../assets/immagini-drink/vino/arneis.jpg';
import barberaAstiImage from '../assets/immagini-drink/vino/barbera-asti.jpg';
import barberaBifaImage from '../assets/immagini-drink/vino/barbera-bifa.jpg';
import falanghinaImage from '../assets/immagini-drink/vino/falanghina.jpg';
import kikeImage from '../assets/immagini-drink/vino/kike.jpg';
import primitivoImage from '../assets/immagini-drink/vino/primitivo.jpg';
import traminerImage from '../assets/immagini-drink/vino/traminer.jpg';
import trevisoImage from '../assets/immagini-drink/vino/treviso.jpg';
import valdobbiadeneImage from '../assets/immagini-drink/vino/valdobbiadene.jpg';
import roseImage from '../assets/immagini-drink/vino/vino-rose.jpg';



export function getSeasonKey(date = new Date()) {
  const year = date.getFullYear();

  const primaveraStart = new Date(year, 2, 21, 6, 0, 0);
  const estateStart = new Date(year, 5, 21, 6, 0, 0);
  const autunnoStart = new Date(year, 8, 23, 6, 0, 0);
  const invernoStart = new Date(year, 11, 22, 6, 0, 0);

  const nextPrimaveraStart = new Date(year + 1, 2, 21);
  if (date >= primaveraStart && date < estateStart) {
    return "primavera";
  } else if (date >= estateStart && date < autunnoStart) {
    return "estate";
  } else if (date >= autunnoStart && date < invernoStart) {
    return "autunno";
  } else {
    if (date >= invernoStart || date < nextPrimaveraStart) {
      return "inverno";
    }
  }
}
const stagioneCorrente = getSeasonKey();

export const stagionalProductsAperitif = {
  autunno: [
    {
      id: "sta1",
      name: "Fizz Zero",
      ingredients: {
        it: ["Tanqueray 0.0", "Sciroppo di Fichi", "Limone", "Soda"],
        en: ["Tanqueray 0.0", "Fig Syrup", "Lemon", "Soda"],
        fr: ["Tanqueray 0.0", "Sirop de Figue", "Citron", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1601057421832-75d3ec6b7d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGVybyUyMHNwcml0eiUyMGF1dHVubmFsZXxlbnwxfHx8fDE3NjM5NjU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta2",
      name: "Spritz Autunnale",
      ingredients: {
        it: ["Polpa Fichi", "Prosecco", "Soda"],
        en: ["Fig Pulp", "Prosecco", "Soda"],
        fr: ["Pulpe de Figue", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1601057421832-75d3ec6b7d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGVybyUyMHNwcml0eiUyMGF1dHVubmFsZXxlbnwxfHx8fDE3NjM5NjU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta3",
      name: "Negroni Autunnale",
      ingredients: {
        it: ["Vermouth Rosso", "Campari", "Gin", "Polpa Fichi", "Vaniglia"],
        en: ["Red Vermouth", "Campari", "Gin", "Fig Pulp", "Vanilla"],
        fr: ["Vermouth Rouge", "Campari", "Gin", "Pulpe de Figue", "Vanille"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1654677608880-51f63b5dee97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWdyb25pJTIwY29ja3RhaWx8ZW58MXx8fHwxNzYzOTY1NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta4",
      name: "Mojito alla Pera",
      ingredients: {
        it: ["Sciroppo d'Acero", "Menta", "Zucchero", "Rum", "Succo Pera", "Zenzero"],
        en: ["Maple Syrup", "Mint", "Sugar", "Rum", "Pear Juice", "Ginger"],
        fr: ["Sirop d'Érable", "Menthe", "Sucre", "Rhum", "Jus de Poire", "Gingembre"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1549234812-d0ec20188ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBjb2NrdGFpbCUyMHBlcmF8ZW58MXx8fHwxNzYzOTY1NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta5",
      name: "Mule Autunnale",
      ingredients: {
        it: ["Vodka", "Ginger Beer", "Sciroppo Mirtilli", "Mela"],
        en: ["Vodka", "Ginger Beer", "Blueberry Syrup", "Apple"],
        fr: ["Vodka", "Bière de Gingembre", "Sirop de Myrtille", "Pomme"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1507008781498-b80c1dfd4c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxNb3Njb3clMjBNdWxlJTIwYXV0dW5ub3xlbnwxfHx8fDE3NjM5NjU0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta6",
      name: "Sour Autunnale",
      ingredients: {
        it: ["Vodka", "Sciroppo Melograno", "Vermouth Rosso", "Succo Arancia"],
        en: ["Vodka", "Pomegranate Syrup", "Red Vermouth", "Orange Juice"],
        fr: ["Vodka", "Sirop de Grenade", "Vermouth Rouge", "Jus d'Orange"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1551532053-1574d32f5053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzZWFzb25hbCUyMGNvb2t0YWlsJTIwYXV0dW1ufGVufDF8fHx8MTc2Mzk2NTQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta7",
      name: "Autumn Fizz",
      ingredients: {
        it: ["Gin", "Pera", "Sciroppo d'Acero", "Limone", "Tonica"],
        en: ["Gin", "Pear", "Maple Syrup", "Lemon", "Tonic"],
        fr: ["Gin", "Poire", "Sirop d'Érable", "Citron", "Tonic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1616782352103-6f4a8618e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aW5pJTIwZ2luJTIwZml6enxlbnwxfHx8fDE3NjM5NjU0Mjh8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta8",
      name: "Gin Fik",
      ingredients: {
        it: ["Polpa Fichi", "Gin", "Sour", "Tonica"],
        en: ["Fig Pulp", "Gin", "Sour", "Tonic"],
        fr: ["Pulpe de Figue", "Gin", "Sour", "Tonic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628169228498-f2911b30e32f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGVybyUyMHNwcml0eiUyMGF1dHVubmFsZXxlbnwxfHx8fDE3NjM5NjU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  primavera: [
    {
      id: "sp1",
      name: "Spritz Fragole e Basilico",
      ingredients: {
        it: ["Aperol", "Prosecco", "Soda", "Polpa di Fragole", "Sciroppo Basilico"],
        en: ["Aperol", "Prosecco", "Soda", "Strawberry Pulp", "Basil Syrup"],
        fr: ["Aperol", "Prosecco", "Soda", "Pulpe de Fraise", "Sirop de Basilic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1601057421832-75d3ec6b7d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGVybyUyMHNwcml0eiUyMGF1dHVubmFsZXxlbnwxfHx8fDE3NjM5NjU0MzJ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sp2",
      name: "Mojito Fragola",
      ingredients: {
        it: ["Lime", "Zucchero", "Menta", "Polpa di Fragole", "Rum Chiaro", "Soda"],
        en: ["Lime", "Sugar", "Mint", "Strawberry Pulp", "Light Rum", "Soda"],
        fr: ["Citron Vert", "Sucre", "Menthe", "Pulpe de Fraise", "Rhum Clair", "Soda"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1601057421832-75d3ec6b7d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGVybyUyMHNwcml0eiUyMGF1dHVubmFsZXxlbnwxfHx8fDE3NjM5NjU0MzJ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sp3",
      name: "Spring Fizz",
      ingredients: {
        it: ["Gin Infuso alla Fragola e Basilico", "Miele", "Limone", "Soda"],
        en: ["Strawberry and Basil Infused Gin", "Honey", "Lemon", "Soda"],
        fr: ["Gin Infusé Fraise et Basilic", "Miel", "Citron", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1654677608880-51f63b5dee97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWdyb25pJTIwY29ja3RhaWx8ZW58MXx8fHwxNzYzOTY1NDMzfDA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sp4",
      name: "Spritz alla Ciliegia",
      ingredients: {
        it: ["Liquore di Ciliegia", "Prosecco", "Zucchero", "Limone", "Soda"],
        en: ["Cherry Liqueur", "Prosecco", "Sugar", "Lemon", "Soda"],
        fr: ["Liqueur de Cerise", "Prosecco", "Sucre", "Citron", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1549234812-d0ec20188ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBjb2NrdGFpbCUyMHBlcmF8ZW58MXx8fHwxNzYzOTY1NDMzfDA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sp5",
      name: "Spritz Primaverile",
      ingredients: {
        it: ["Limoncello", "Polpa di Fragole", "Prosecco", "Soda"],
        en: ["Limoncello", "Strawberry Pulp", "Prosecco", "Soda"],
        fr: ["Limoncello", "Pulpe de Fraise", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1507008781498-b80c1dfd4c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxNb3Njb3clMjBNdWxlJTIwYXV0dW5ub3xlbnwxfHx8fDE3NjM5NjU0MzN8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sp6",
      name: "Gin Tonic al Mirtillo",
      ingredients: {
        it: ["Gin", "Tonica", "Polpa di Mirtilli"],
        en: ["Gin", "Tonic", "Blueberry Pulp"],
        fr: ["Gin", "Tonic", "Pulpe de Myrtille"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1551532053-1574d32f5053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzZWFzb25hbCUyMGNvb2t0YWlsJTIwYXV0dW1ufGVufDF8fHx8MTc2Mzk2NTQzNHww&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sp7",
      name: "Garden",
      ingredients: {
        it: ["Gin", "Sciroppo di Rose", "Limone", "Soda"],
        en: ["Gin", "Rose Syrup", "Lemon", "Soda"],
        fr: ["Gin", "Sirop de Rose", "Citron", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1616782352103-6f4a8618e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aW5pJTIwZ2luJTIwZml6enxlbnwxfHx8fDE3NjM5NjU0Mjh8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  inverno: [
    {
      id: "sw1",
      name: "Spritz Invernal",
      ingredients: {
        it: ["Aperol", "Prosecco", "Sidro di Mele", "Soda", "Cannella"],
        en: ["Aperol", "Prosecco", "Apple Cider", "Soda", "Cinnamon"],
        fr: ["Aperol", "Prosecco", "Cidre de Pomme", "Soda", "Cannelle"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw2",
      name: "Negroni Polare",
      ingredients: {
        it: ["Martini Rosso", "Campari", "Gin", "Sidro di Mele", "Cannella"],
        en: ["Red Martini", "Campari", "Gin", "Apple Cider", "Cinnamon"],
        fr: ["Martini Rouge", "Campari", "Gin", "Cidre de Pomme", "Cannelle"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw3",
      name: "Forest Fizz",
      ingredients: {
        it: ["Gin", "Limone", "Tonica", "Zucchero", "Liquore al Pino Mugo"],
        en: ["Gin", "Lemon", "Tonic", "Sugar", "Mugo Pine Liqueur"],
        fr: ["Gin", "Citron", "Tonic", "Sucre", "Liqueur de Pin Mugo"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw4",
      name: "Mandarin Mule",
      ingredients: {
        it: ["Vodka", "Liquore al Mandarino", "Lime", "Ginger Beer"],
        en: ["Vodka", "Mandarin Liqueur", "Lime", "Ginger Beer"],
        fr: ["Vodka", "Liqueur de Mandarine", "Citron Vert", "Bière de Gingembre"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw5",
      name: "Winter Spritz",
      ingredients: {
        it: ["Martini Bianco", "Liquore al Mandarino", "Prosecco", "Soda"],
        en: ["White Martini", "Mandarin Liqueur", "Prosecco", "Soda"],
        fr: ["Martini Blanc", "Liqueur de Mandarine", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw6",
      name: "Negroni al Mandarino",
      ingredients: {
        it: ["Martini Rosso", "Campari", "Liquore al Mandarino"],
        en: ["Red Martini", "Campari", "Mandarin Liqueur"],
        fr: ["Martini Rouge", "Campari", "Liqueur de Mandarine"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  estate: [
    {
      id: "se1",
      name: "Spritz Estivo",
      ingredients: {
        it: ["Aperol", "Zucchero", "Limone", "Birra"],
        en: ["Aperol", "Sugar", "Lemon", "Beer"],
        fr: ["Aperol", "Sucre", "Citron", "Bière"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se2",
      name: "Spritz Limone e Basilico",
      ingredients: {
        it: ["Zucchero", "Limone", "Prosecco", "Soda", "Basilico in foglie"],
        en: ["Sugar", "Lemon", "Prosecco", "Soda", "Basil Leaves"],
        fr: ["Sucre", "Citron", "Prosecco", "Soda", "Feuilles de Basilic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se3",
      name: "Amaroni",
      ingredients: {
        it: ["Amaretto", "Campari", "Martini Rosso", "Amarena"],
        en: ["Amaretto", "Campari", "Red Martini", "Amarena Cherry"],
        fr: ["Amaretto", "Campari", "Martini Rouge", "Cerise Amarena"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se4",
      name: "Negroni Light",
      ingredients: {
        it: ["Vermouth Rosso", "Campari", "Crodino"],
        en: ["Red Vermouth", "Campari", "Crodino"],
        fr: ["Vermouth Rouge", "Campari", "Crodino"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se5",
      name: "Spritz Pesca",
      ingredients: {
        it: ["Liquore alla Pesca", "Aperol", "Prosecco", "Soda", "Basilico in foglie"],
        en: ["Peach Liqueur", "Aperol", "Prosecco", "Soda", "Basil Leaves"],
        fr: ["Liqueur de Pêche", "Aperol", "Prosecco", "Soda", "Feuilles de Basilic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se6",
      name: "Gin Fizz Estivo",
      ingredients: {
        it: ["Gin", "Zucchero", "Limone", "Pompelmo", "Tonica", "Rosmarino"],
        en: ["Gin", "Sugar", "Lemon", "Grapefruit", "Tonic", "Rosemary"],
        fr: ["Gin", "Sucre", "Citron", "Pamplemousse", "Tonic", "Romarin"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
};

export const productsAperitif = {
  classici: [
    {
      id: "c1",
      name: "Bellini",
      ingredients: {
        it: ["Prosecco", "Polpa di pesca"],
        en: ["Prosecco", "Peach Pulp"],
        fr: ["Prosecco", "Pulpe de Pêche"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: belliniImage,
    },
    {
      id: "c2",
      name: "Cosmopolitan",
      ingredients: {
        it: ["Vodka", "Triple sec", "Succo mirtillo", "Lime"],
        en: ["Vodka", "Triple sec", "Cranberry Juice", "Lime"],
        fr: ["Vodka", "Triple sec", "Jus de Canneberge", "Citron vert"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: cosmopolitanImage,
    },
    {
      id: "c3",
      name: "Gin Fizz",
      ingredients: {
        it: ["Gin", "Limone", "Zucchero", "Soda", "Tonica"],
        en: ["Gin", "Lemon", "Sugar", "Soda", "Tonic Water"],
        fr: ["Gin", "Citron", "Sucre", "Soda", "Eau tonique"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: ginFizzImage,
    },
    {
      id: "c4",
      name: "Gin Tonic",
      ingredients: {
        it: ["Gin", "Tonica"],
        en: ["Gin", "Tonic Water"],
        fr: ["Gin", "Eau tonique"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: ginTonicImage,
    },
    {
      id: "c5",
      name: "Margarita",
      ingredients: {
        it: ["Tequila", "Triple sec", "Lime", "Zucchero", "Crosta di sale"],
        en: ["Tequila", "Triple sec", "Lime", "Sugar", "Salt Rim"],
        fr: ["Tequila", "Triple sec", "Citron vert", "Sucre", "Croûte de sel"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: margaritaImage,
    },
    {
      id: "c6",
      name: "Mojito",
      ingredients: {
        it: ["Lime", "Zucchero", "Menta", "Rum", "Soda"],
        en: ["Lime", "Sugar", "Mint", "Rum", "Soda"],
        fr: ["Citron vert", "Sucre", "Menthe", "Rhum", "Soda"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: mojitoImage,
    },
    {
      id: "c7",
      name: "Moscow Mule",
      ingredients: {
        it: ["Vodka", "Lime", "Ginger beer"],
        en: ["Vodka", "Lime", "Ginger beer"],
        fr: ["Vodka", "Citron vert", "Ginger beer"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: moscowMuleImage,
    },
    {
      id: "c8",
      name: "Piñacolada",
      ingredients: {
        it: ["Rum", "Batida", "Succo ananas"],
        en: ["Rum", "Batida", "Pineapple Juice"],
        fr: ["Rhum", "Batida", "Jus d'Ananas"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: pinacoladaImage,
    },
    {
      id: "c9",
      name: "Rossini",
      ingredients: {
        it: ["Prosecco", "Polpa fragola"],
        en: ["Prosecco", "Strawberry Pulp"],
        fr: ["Prosecco", "Pulpe de Fraise"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: rossiniImage,
    },
  ],
  spritz: [
    {
      id: "spz1",
      name: "Spritz Aperol",
      ingredients: {
        it: ["Aperol", "Prosecco", "Soda"],
        en: ["Aperol", "Prosecco", "Soda"],
        fr: ["Aperol", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzVenturoImage,
    },
    {
      id: "spz2",
      name: "Spritz Campari",
      ingredients: {
        it: ["Campari", "Prosecco", "Soda"],
        en: ["Campari", "Prosecco", "Soda"],
        fr: ["Campari", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzVenturoImage,
    },
    {
      id: "spz3",
      name: "Spritz Venturo",
      ingredients: {
        it: ["Venturo", "Prosecco", "Soda"],
        en: ["Venturo", "Prosecco", "Soda"],
        fr: ["Venturo", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzVenturoImage,
    },
    {
      id: "spz4",
      name: "Spritz alla Viola",
      ingredients: {
        it: ["Sciroppo alla viola", "Prosecco", "Soda"],
        en: ["Violet Syrup", "Prosecco", "Soda"],
        fr: ["Sirop de Violette", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzViolaImage,
    },
    {
      id: "spz5",
      name: "Spritz alla Fragola",
      ingredients: {
        it: ["Aperol", "Prosecco", "Soda", "Polpa di fragola"],
        en: ["Aperol", "Prosecco", "Soda", "Strawberry Pulp"],
        fr: ["Aperol", "Prosecco", "Soda", "Pulpe de Fraise"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzFragolaImage,
    },
    {
      id: "spz6",
      name: "Spritz allo Zenzero",
      ingredients: {
        it: ["Aperol", "Prosecco", "Soda", "Sciroppo allo zenzero"],
        en: ["Aperol", "Prosecco", "Soda", "Ginger Syrup"],
        fr: ["Aperol", "Prosecco", "Soda", "Sirop de Gingembre"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzZenzeroImage,
    },
    {
      id: "spz7",
      name: "Spritz al Limone",
      ingredients: {
        it: ["Prosecco", "Limone", "Tonica", "Menta in foglie"],
        en: ["Prosecco", "Lemon", "Tonic Water", "Mint Leaves"],
        fr: ["Prosecco", "Citron", "Eau tonique", "Feuilles de Menthe"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzLimoneImage,
    },
    {
      id: "spz8",
      name: "Spritz Hugo",
      ingredients: {
        it: ["Sciroppo di sambuco", "Prosecco", "Soda", "Menta in foglie"],
        en: ["Elderflower Syrup", "Prosecco", "Soda", "Mint Leaves"],
        fr: ["Sirop de Sureau", "Prosecco", "Soda", "Feuilles de Menthe"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: hugoImage,
    },
    {
      id: "spz9",
      name: "Spritz ai Frutti di Bosco",
      ingredients: {
        it: ["Aperol", "Prosecco", "Soda", "Sciroppo ai frutti di bosco"],
        en: ["Aperol", "Prosecco", "Soda", "Forest Fruits Syrup"],
        fr: ["Aperol", "Prosecco", "Soda", "Sirop de Fruits des Bois"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzFruttiBoscoImage,
    },
    {
      id: "spz10",
      name: "Spritz alla Rosa",
      ingredients: {
        it: ["Sciroppo di rosa", "Prosecco", "Soda"],
        en: ["Rose Syrup", "Prosecco", "Soda"],
        fr: ["Sirop de Rose", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzRosaImage,
    },
    {
      id: "spz11",
      name: "Spritz Esotico",
      ingredients: {
        it: ["Aperol", "Prosecco", "Soda", "Polpa di mango"],
        en: ["Aperol", "Prosecco", "Soda", "Mango Pulp"],
        fr: ["Aperol", "Prosecco", "Soda", "Pulpe de Mangue"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzEsoticoImage,
    },
    {
      id: "spz12",
      name: "Spritz Chinotto",
      ingredients: {
        it: ["Aperol", "Prosecco", "Chinotto"],
        en: ["Aperol", "Prosecco", "Chinotto"],
        fr: ["Aperol", "Prosecco", "Chinotto"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: spritzChinottoImage,
    },
  ],
  negroni: [
    {
      id: "neg1",
      name: "Negroni",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Gin"],
        en: ["Red Vermouth", "Campari", "Gin"],
        fr: ["Vermouth rouge", "Campari", "Gin"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: negritoImage,
    },
    {
      id: "neg2",
      name: "Negrito",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Rum Zacapa"],
        en: ["Red Vermouth", "Campari", "Zacapa Rum"],
        fr: ["Vermouth rouge", "Campari", "Rhum Zacapa"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: negritoImage,
    },
    {
      id: "neg3",
      name: "Negroni Sbagliato",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Prosecco"],
        en: ["Red Vermouth", "Campari", "Prosecco"],
        fr: ["Vermouth rouge", "Campari", "Prosecco"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: negroniSbagliatoImage,
    },
    {
      id: "neg4",
      name: "Negrosky",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Vodka"],
        en: ["Red Vermouth", "Campari", "Vodka"],
        fr: ["Vermouth rouge", "Campari", "Vodka"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1654677608880-51f63b5dee97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxuZWdyb25pJTIwY29ja3RhaWx8ZW58MXx8fHwxNzYzOTY1NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "neg5",
      name: "Negrotto",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Chinotto Lurisia"],
        en: ["Red Vermouth", "Campari", "Lurisia Chinotto"],
        fr: ["Vermouth rouge", "Campari", "Chinotto Lurisia"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1654677608880-51f63b5dee97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxuZWdyb25pJTIwY29ja3RhaWx8ZW58MXx8fHwxNzYzOTY1NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "neg6",
      name: "Negroni Frutti di Bosco",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Gin", "Frutti di bosco"],
        en: ["Red Vermouth", "Campari", "Gin", "Forest Fruits"],
        fr: ["Vermouth rouge", "Campari", "Gin", "Fruits des Bois"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1654677608880-51f63b5dee97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxuZWdyb25pJTIwZnJ1dHRpJTIwZGklMjBib3Njb3xlbnwxfHx8fDE3NjM5NjU0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "neg7",
      name: "Americano",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Soda"],
        en: ["Red Vermouth", "Campari", "Soda"],
        fr: ["Vermouth rouge", "Campari", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1631527756184-7a3562637f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbWVyaWNhbm8lMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjM5NjU0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "neg8",
      name: "Negroni Esotico",
      ingredients: {
        it: ["Vermouth rosso", "Campari", "Gin", "Polpa di mango"],
        en: ["Red Vermouth", "Campari", "Gin", "Mango Pulp"],
        fr: ["Vermouth rouge", "Campari", "Gin", "Pulpe de Mangue"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1654677608880-51f63b5dee97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxuZWdyb25pJTIwY29ja3RhaWx8ZW58MXx8fHwxNzYzOTY1NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  analcolici: [
    {
      id: "ana1",
      name: "Spericolada",
      ingredients: {
        it: ["Succo ananas", "Succo pera", "Sciroppo cocco"],
        en: ["Pineapple Juice", "Pear Juice", "Coconut Syrup"],
        fr: ["Jus d'Ananas", "Jus de Poire", "Sirop de Coco"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: spericoladaImage,
    },
    {
      id: "ana2",
      name: "Pescacolada",
      ingredients: {
        it: ["Succo pesca", "Succo ananas", "Sciroppo di cocco"],
        en: ["Peach Juice", "Pineapple Juice", "Coconut Syrup"],
        fr: ["Jus de Pêche", "Jus d'Ananas", "Sirop de Coco"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: pescacoladaImage,
    },
    {
      id: "ana3",
      name: "Virgin Colada",
      ingredients: {
        it: ["Succo ananas", "Sciroppo di cocco"],
        en: ["Pineapple Juice", "Coconut Syrup"],
        fr: ["Jus d'Ananas", "Sirop de Coco"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: virgincoladaImage,
    },
    {
      id: "ana4",
      name: "Strawberry Virgin Colada",
      ingredients: {
        it: ["Succo ananas", "Polpa fragola", "Sciroppo cocco"],
        en: ["Pineapple Juice", "Strawberry Pulp", "Coconut Syrup"],
        fr: ["Jus d'Ananas", "Pulpe de Fraise", "Sirop de Coco"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "ana5",
      name: "Florida",
      ingredients: {
        it: ["Succo arancia", "Succo pompelmo", "Limone", "Zucchero", "Soda"],
        en: ["Orange Juice", "Grapefruit Juice", "Lemon", "Sugar", "Soda"],
        fr: ["Jus d'Orange", "Jus de Pamplemousse", "Citron", "Sucre", "Soda"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "ana6",
      name: "Apple Fresh",
      ingredients: {
        it: ["Succo mela verde", "Polpa cranberry"],
        en: ["Green Apple Juice", "Cranberry Pulp"],
        fr: ["Jus de Pomme Verte", "Pulpe de Canneberge"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "ana7",
      name: "New Sensation",
      ingredients: {
        it: ["Succo ananas", "Succo arancia", "Polpa fragola"],
        en: ["Pineapple Juice", "Orange Juice", "Strawberry Pulp"],
        fr: ["Jus d'Ananas", "Jus d'Orange", "Pulpe de Fraise"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "ana8",
      name: "Angel",
      ingredients: {
        it: ["Succo mela verde", "Limone", "Polpa kiwi", "Tonica"],
        en: ["Green Apple Juice", "Lemon", "Kiwi Pulp", "Tonic Water"],
        fr: ["Jus de Pomme Verte", "Citron", "Pulpe de Kiwi", "Eau tonique"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "ana9",
      name: "Peter",
      ingredients: {
        it: ["Succo ananas", "Limone", "Frutti di bosco", "Tonica"],
        en: ["Pineapple Juice", "Lemon", "Forest Fruits", "Tonic Water"],
        fr: ["Jus d'Ananas", "Citron", "Fruits des Bois", "Eau tonique"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "ana10",
      name: "Miami",
      ingredients: {
        it: ["Succo ananas", "Limone", "Sciroppo granatina"],
        en: ["Pineapple Juice", "Lemon", "Grenadine Syrup"],
        fr: ["Jus d'Ananas", "Citron", "Sirop de Grenadine"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  analcoliciPremium: [
    {
      id: "anap1",
      name: "Gin Tonic Zero",
      ingredients: {
        it: ["Gin Tanqueray 0.0", "Tonica"],
        en: ["Tanqueray 0.0 Gin", "Tonic Water"],
        fr: ["Gin Tanqueray 0.0", "Eau tonique"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1634496064950-02f043806b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWdyb25pJTIwY29ja3RhaWx8ZW58MXx8fHwxNzYzOTY1NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap2",
      name: "Negroni Zero",
      ingredients: {
        it: ["Freely Vermouth", "Freely Bitter", "Gin Tanqueray 0.0"],
        en: ["Freely Vermouth", "Freely Bitter", "Tanqueray 0.0 Gin"],
        fr: ["Freely Vermouth", "Freely Bitter", "Gin Tanqueray 0.0"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap3",
      name: "Americano Zero",
      ingredients: {
        it: ["Freely Vermouth", "Freely Bitter", "Soda"],
        en: ["Freely Vermouth", "Freely Bitter", "Soda"],
        fr: ["Freely Vermouth", "Freely Bitter", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap4",
      name: "Spritz Zero",
      ingredients: {
        it: ["Freely Aperol", "Tonica"],
        en: ["Freely Aperol", "Tonic Water"],
        fr: ["Freely Aperol", "Eau tonique"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap5",
      name: "Ipa No Alcol",
      ingredients: {
        it: ["IPA Analcolica", "0.0% vol", "0.33L"],
        en: ["Non-Alcoholic IPA", "0.0% vol", "0.33L"],
        fr: ["IPA Sans Alcool", "0.0% vol", "0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap6",
      name: "Lager No Alcol",
      ingredients: {
        it: ["Lager Analcolica", "0.0% vol", "0.33L"],
        en: ["Non-Alcoholic Lager", "0.0% vol", "0.33L"],
        fr: ["Lager Sans Alcool", "0.0% vol", "0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  stagionali: stagionalProductsAperitif[stagioneCorrente],
  hotdrink: [
    {
      id: "hd1",
      name: "Spritz Caldo",
      ingredients: {
        it: ["Aperol", "Vino Bianco", "Sidro di Mele", "Cannella"],
        en: ["Aperol", "White Wine", "Apple Cider", "Cinnamon"],
        fr: ["Aperol", "Vin Blanc", "Cidre de Pomme", "Cannelle"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd2",
      name: "Spritz Caldo N°2",
      ingredients: {
        it: ["Aperol", "Vino Bianco", "Succo d'Arancia", "Miele"],
        en: ["Aperol", "White Wine", "Orange Juice", "Honey"],
        fr: ["Aperol", "Vin Blanc", "Jus d'Orange", "Miel"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd3",
      name: "Sangria Calda",
      ingredients: {
        it: ["Vino Rosso", "Rum Scuro", "Succo d'Arancia", "Zucchero", "Infuso di Frutti di Bosco"],
        en: ["Red Wine", "Dark Rum", "Orange Juice", "Sugar", "Wild Berries Infusion"],
        fr: ["Vin Rouge", "Rhum Ambré", "Jus d'Orange", "Sucre", "Infusion de Fruits des Bois"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd4",
      name: "Sidrum",
      ingredients: {
        it: ["Rum", "Sidro di Mele"],
        en: ["Rum", "Apple Cider"],
        fr: ["Rhum", "Cidre de Pomme"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd5",
      name: "Negroni Caldo",
      ingredients: {
        it: ["Campari", "Martini Rosso", "Succo d'Arancia"],
        en: ["Campari", "Martini Rosso", "Orange Juice"],
        fr: ["Campari", "Martini Rosso", "Jus d'Orange"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    }
  ],
  vini: [
    {
      id: "v1",
      name: "Nebbiolo",
      ingredients: {
        it: ["Nebbiolo", "Piemonte", "Rosso"],
        en: ["Nebbiolo", "Piedmont", "Red"],
        fr: ["Nebbiolo", "Piémont", "Rouge"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: "https://images.unsplash.com/photo-1598516087522-875c742c019d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3aW5lJTIwZ2xhc3NfMi9lbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Red Wine
    },
    {
      id: "v2",
      name: "Barbera",
      ingredients: {
        it: ["Barbera", "Piemonte", "Rosso"],
        en: ["Barbera", "Piedmont", "Red"],
        fr: ["Barbera", "Piémont", "Rouge"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: barberaAstiImage
    },
    {
      id: "v3",
      name: "La Bifa",
      ingredients: {
        it: ["Barbera", "Pinerolese (Piemonte)", "Rosso"],
        en: ["Barbera", "Pinerolese (Piedmont)", "Red"],
        fr: ["Barbera", "Pinerolese (Piémont)", "Rouge"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"]
      },
      image: barberaBifaImage
    },
    {
      id: "v4",
      name: "Primitivo",
      ingredients: {
        it: ["Primitivo", "Puglia", "Rosso"],
        en: ["Primitivo", "Apulia", "Red"],
        fr: ["Primitivo", "Pouilles", "Rouge"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"]
      },
      image: primitivoImage
    },
    {
      id: "v5",
      name: "Valdobbiadene",
      ingredients: {
        it: ["Glera", "Veneto", "Prosecco"],
        en: ["Glera", "Veneto", "Prosecco"],
        fr: ["Glera", "Vénétie", "Prosecco"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: valdobbiadeneImage
    },
    {
      id: "v6",
      name: "Treviso",
      ingredients: {
        it: ["Glera", "Veneto", "Prosecco"],
        en: ["Glera", "Veneto", "Prosecco"],
        fr: ["Glera", "Vénétie", "Prosecco"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: trevisoImage
    },
    {
      id: "v7",
      name: "Arneis",
      ingredients: {
        it: ["Arneis", "Piemonte", "Bianco Fermo"],
        en: ["Arneis", "Piedmont", "Still White"],
        fr: ["Arneis", "Piémont", "Blanc tranquille"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: arneisImage
    },
    {
      id: "v8",
      name: "Gewürztraminer",
      ingredients: {
        it: ["Gewürztraminer", "Alto Adige", "Bianco Fermo"],
        en: ["Gewürztraminer", "Alto Adige", "Still White"],
        fr: ["Gewürztraminer", "Haut-Adige", "Blanc tranquille"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: traminerImage
    },
    {
      id: "v9",
      name: "Falanghina",
      ingredients: {
        it: ["Falanghina", "Campania", "Bianco Fermo"],
        en: ["Falanghina", "Campania", "Still White"],
        fr: ["Falanghina", "Campanie", "Blanc tranquille"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: falanghinaImage
    },
    {
      id: "v10",
      name: "Kikè",
      ingredients: {
        it: ["Moscato", "Sicilia", "Bianco Fermo"],
        en: ["Moscato", "Sicily", "Still White"],
        fr: ["Moscato", "Sicile", "Blanc tranquille"],
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"],
      },
      image: kikeImage
    },
    {
      id: "v11",
      name: "Rosé",
      ingredients: {
        it: ["Glera e Pinot Nero", "Valdobbiadene (Veneto)", "Rosé"],
        en: ["Glera and Pinot Noir", "Valdobbiadene (Veneto)", "Rosé"],
        fr: ["Glera et Pinot Noir", "Valdobbiadene (Vénétie)", "Rosé"]
      },
      price: {
        it: ["€7,00/calice"],
        en: ["€7,00/glass"],
        fr: ["€7,00/verre"]
      },
      image: roseImage
    },
  ],
  birreSpina: [
    {
      id: "bs1",
      name: "Stella Artois Media",
      ingredients: {
        it: ["Lager", "4.5% vol"],
        en: ["Lager", "4.5% vol"],
        fr: ["Lager", "4.5% vol"],
      },
      price: {
        it: ["€6,00/0.5L"],
        en: ["€6,00/0.5L"],
        fr: ["€6,00/0.5L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Birra alla Spina
    },
    {
      id: "bs2",
      name: "Stella Artois Piccola",
      ingredients: {
        it: ["Lager", "4.5% vol"],
        en: ["Lager", "4.5% vol"],
        fr: ["Lager", "4.5% vol"],
      },
      price: {
        it: ["€5,00/0.25L"],
        en: ["€5,00/0.25L"],
        fr: ["€5,00/0.25L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Birra alla Spina
    },
    {
      id: "bs3",
      name: "Leffe Rossa",
      ingredients: {
        it: ["Dubbel", "6.6% vol"],
        en: ["Dubbel", "6.6% vol"],
        fr: ["Dubbel", "6.6% vol"],
      },
      price: {
        it: ["€6,00/0.4L"],
        en: ["€6,00/0.4L"],
        fr: ["€6,00/0.4L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bs4",
      name: "Leffe Bionda",
      ingredients: {
        it: ["Blonde Ale", "6.6% vol"],
        en: ["Blonde Ale", "6.6% vol"],
        fr: ["Blonde Ale", "6.6% vol"],
      },
      price: {
        it: ["€6,00/0.4L"],
        en: ["€6,00/0.4L"],
        fr: ["€6,00/0.4L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  birreBott: [
    {
      id: "bb1",
      name: "Beck's",
      ingredients: {
        it: ["Premium Lager", "5.0% vol", "0.33L"],
        en: ["Premium Lager", "5.0% vol", "0.33L"],
        fr: ["Lager Premium", "5.0% vol", "0.33L"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bottiglia di Birra
    },
    {
      id: "bb2",
      name: "Corona",
      ingredients: {
        it: ["Lager Messicana", "4.5% vol", "0.33L"],
        en: ["Mexican Lager", "4.5% vol", "0.33L"],
        fr: ["Lager Mexicaine", "4.5% vol", "0.33L"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb3",
      name: "Heineken",
      ingredients: {
        it: ["Pale Lager", "5.0% vol", "0.33L"],
        en: ["Pale Lager", "5.0% vol", "0.33L"],
        fr: ["Pale Lager", "5.0% vol", "0.33L"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb4",
      name: "Tennent's",
      ingredients: {
        it: ["Strong Lager", "9.0% vol", "0.33L"],
        en: ["Strong Lager", "9.0% vol", "0.33L"],
        fr: ["Lager Forte", "9.0% vol", "0.33L"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb5",
      name: "Bud",
      ingredients: {
        it: ["American Lager", "5.0% vol", "0.33L"],
        en: ["American Lager", "5.0% vol", "0.33L"],
        fr: ["Lager Américaine", "5.0% vol", "0.33L"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb6",
      name: "Ichnusa",
      ingredients: {
        it: ["Pale Lager", "4.7% vol", "0.33L"],
        en: ["Pale Lager", "4.7% vol", "0.33L"],
        fr: ["Pale Lager", "4.7% vol", "0.33L"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb7",
      name: "Ceres",
      ingredients: {
        it: ["Strong Lager", "7.7% vol", "0.33L"],
        en: ["Strong Lager", "7.7% vol", "0.33L"],
        fr: ["Strong Lager", "7.7% vol", "0.33L"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwYm90dGxlfGVufDB8fHx8MTcwOTI0NjgyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  bibite: [
    {
      id: "l1",
      name: "Coca-Cola",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "l2",
      name: "Coca-Cola Zero",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l3",
      name: "The Pesca",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l4",
      name: "The Limone",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l5",
      name: "Sprite",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l6",
      name: "Fanta",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l7",
      name: "Lemon Soda",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l8",
      name: "Crodino",
      ingredients: {
        it: ["0.10L"],
        en: ["0.10L"],
        fr: ["0.10L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l9",
      name: "Chinotto",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l10",
      name: "Schweppes",
      ingredients: {
        it: ["0.18L"],
        en: ["0.18L"],
        fr: ["0.18L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l11",
      name: "Succo Pesca",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l12",
      name: "Succo Pera",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l13",
      name: "Succo Mirtillo",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l14",
      name: "Succo Ananas",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l15",
      name: "Succo Pompelmo",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
  ],
};

export const stagionalProductsNight = {
  autunno: [
    {
      id: "sta1",
      name: "No Spritz",
      ingredients: {
        it: ["Vodka", "Succo Mela", "Limone", "Soda", "Frutti di Bosco"],
        en: ["Vodka", "Apple Juice", "Lemon", "Soda", "Wild Berries"],
        fr: ["Vodka", "Jus de Pomme", "Citron", "Soda", "Fruits des Bois"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta2",
      name: "Gin Spritz",
      ingredients: {
        it: ["Gin", "Aperol", "Sciroppo Melograno", "Tonica"],
        en: ["Gin", "Aperol", "Pomegranate Syrup", "Tonic"],
        fr: ["Gin", "Aperol", "Sirop de Grenade", "Tonic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta3",
      name: "Mojito Fiko",
      ingredients: {
        it: ["Lime", "Zucchero", "Menta in Foglie", "Rum", "Polpa di Fichi", "Soda"],
        en: ["Lime", "Sugar", "Mint Leaves", "Rum", "Fig Pulp", "Soda"],
        fr: ["Citron Vert", "Sucre", "Feuilles de Menthe", "Rhum", "Pulpe de Figue", "Soda"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta4",
      name: "Gin Fik",
      ingredients: {
        it: ["Gin", "Polpa di Fichi", "Sour", "Tonica"],
        en: ["Gin", "Fig Pulp", "Sour", "Tonic"],
        fr: ["Gin", "Pulpe de Figue", "Sour", "Tonic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta5",
      name: "Mojito alla Pera",
      ingredients: {
        it: ["Lime", "Zucchero", "Menta in Foglie", "Sciroppo d'Acero", "Rum", "Succo di Pera", "Zenzero"],
        en: ["Lime", "Sugar", "Mint Leaves", "Maple Syrup", "Rum", "Pear Juice", "Ginger"],
        fr: ["Citron Vert", "Sucre", "Feuilles de Menthe", "Sirop d'Érable", "Rhum", "Jus de Poire", "Gingembre"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta6",
      name: "Mule Autunnale",
      ingredients: {
        it: ["Vodka", "Ginger Beer", "Sciroppo Mirtilli", "Succo Mela"],
        en: ["Vodka", "Ginger Beer", "Blueberry Syrup", "Apple Juice"],
        fr: ["Vodka", "Ginger Beer", "Sirop de Myrtille", "Jus de Pomme"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta7",
      name: "Magilla",
      ingredients: {
        it: ["Polpa di Fichi", "Vaniglia", "Vodka", "Lime", "Ginger Ale"],
        en: ["Fig Pulp", "Vanilla", "Vodka", "Lime", "Ginger Ale"],
        fr: ["Pulpe de Figue", "Vanille", "Vodka", "Citron Vert", "Ginger Ale"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta8",
      name: "Spritz Autunnale",
      ingredients: {
        it: ["Polpa di Fichi", "Melograno", "Prosecco", "Soda"],
        en: ["Fig Pulp", "Pomegranate", "Prosecco", "Soda"],
        fr: ["Pulpe de Figue", "Grenade", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sta9",
      name: "Hugo Autunnale",
      ingredients: {
        it: ["Sciroppo Fiori di Sambuco", "Melograno", "Prosecco", "Soda", "Menta in Foglie"],
        en: ["Elderflower Syrup", "Pomegranate", "Prosecco", "Soda", "Mint Leaves"],
        fr: ["Sirop de Fleur de Sureau", "Grenade", "Prosecco", "Soda", "Feuilles de Menthe"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1596700862082-969c36239167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhaHR1bW4lMjBjb2NrdGFpbF9lbnwxfHx8fDE3NjI0MjY4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  primavera: [
    {
      id: "spr1",
      name: "Paloma Sunrise",
      ingredients: {
        it: ["Tequila", "Lime", "Pompelmo", "Granatina", "Sale"],
        en: ["Tequila", "Lime", "Grapefruit", "Grenadine", "Salt"],
        fr: ["Tequila", "Citron Vert", "Pamplemousse", "Grenadine", "Sel"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spr2",
      name: "Whiskey Sour",
      ingredients: {
        it: ["Whiskey", "Miele", "Limone", "Soda", "Angostura"],
        en: ["Whiskey", "Honey", "Lemon", "Soda", "Angostura"],
        fr: ["Whiskey", "Miel", "Citron", "Soda", "Angostura"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spr3",
      name: "Rose",
      ingredients: {
        it: ["Gin", "Sciroppo di Melograno", "Prosecco Rose'"],
        en: ["Gin", "Pomegranate Syrup", "Rose' Prosecco"],
        fr: ["Gin", "Sirop de Grenade", "Prosecco Rosé"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spr4",
      name: "Flower",
      ingredients: {
        it: ["Gin", "Sciroppo di Fiori di Sambuco", "Soda", "Rosmarino"],
        en: ["Gin", "Elderflower Syrup", "Soda", "Rosemary"],
        fr: ["Gin", "Sirop de Fleur de Sureau", "Soda", "Romarin"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spr5",
      name: "Margarita Fragola",
      ingredients: {
        it: ["Tequila", "Triple Sec", "Lime", "Fragola"],
        en: ["Tequila", "Triple Sec", "Lime", "Strawberry"],
        fr: ["Tequila", "Triple Sec", "Citron Vert", "Fraise"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spr6",
      name: "Basil Sour",
      ingredients: {
        it: ["Gin", "Zucchero", "Limone", "Soda", "Basilico"],
        en: ["Gin", "Sugar", "Lemon", "Soda", "Basil"],
        fr: ["Gin", "Sucre", "Citron", "Soda", "Basilic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spr7",
      name: "Cherry Sour",
      ingredients: {
        it: ["Gin", "Liquore alle Ciliegie", "Sciroppo di Viola", "Limone", "Soda"],
        en: ["Gin", "Cherry Liqueur", "Violet Syrup", "Lemon", "Soda"],
        fr: ["Gin", "Liqueur de Cerise", "Sirop de Violette", "Citron", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spr8",
      name: "Garden",
      ingredients: {
        it: ["Gin", "Sciroppo di Rosa", "Limone", "Soda"],
        en: ["Gin", "Rose Syrup", "Lemon", "Soda"],
        fr: ["Gin", "Sirop de Rose", "Citron", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1544654922-83906a5b7c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmltYXZlcmElMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  inverno: [
    {
      id: "sw1",
      name: "Spritz Invernale",
      ingredients: {
        it: ["Aperol", "Prosecco", "Sidro di Mele", "Soda", "Cannella"],
        en: ["Aperol", "Prosecco", "Apple Cider", "Soda", "Cinnamon"],
        fr: ["Aperol", "Prosecco", "Cidre de Pomme", "Soda", "Cannelle"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw2",
      name: "Negroni Polare",
      ingredients: {
        it: ["Martini Rosso", "Campari", "Gin", "Sidro di Mele", "Cannella"],
        en: ["Martini Rosso", "Campari", "Gin", "Apple Cider", "Cinnamon"],
        fr: ["Martini Rouge", "Campari", "Gin", "Cidre de Pomme", "Cannelle"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw3",
      name: "Forest Fizz",
      ingredients: {
        it: ["Gin", "Limone", "Tonica", "Zucchero", "Liquore al Pino Mugo"],
        en: ["Gin", "Lemon", "Tonic", "Sugar", "Mugo Pine Liqueur"],
        fr: ["Gin", "Citron", "Tonic", "Sucre", "Liqueur de Pin Mugo"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw4",
      name: "Mandarin Mule",
      ingredients: {
        it: ["Vodka", "Liquore al Mandarino", "Lime", "Ginger Beer"],
        en: ["Vodka", "Mandarin Liqueur", "Lime", "Ginger Beer"],
        fr: ["Vodka", "Liqueur de Mandarine", "Citron Vert", "Ginger Beer"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw5",
      name: "Winter Spritz",
      ingredients: {
        it: ["Martini Bianco", "Liquore al Mandarino", "Prosecco", "Soda"],
        en: ["Martini Bianco", "Mandarin Liqueur", "Prosecco", "Soda"],
        fr: ["Martini Blanc", "Liqueur de Mandarine", "Prosecco", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw6",
      name: "Spritz Caldo",
      ingredients: {
        it: ["Aperol", "Vino Bianco", "Sidro di Mele", "Cannella"],
        en: ["Aperol", "White Wine", "Apple Cider", "Cinnamon"],
        fr: ["Aperol", "Vin Blanc", "Cidre de Pomme", "Cannelle"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw7",
      name: "Spritz Caldo N°2",
      ingredients: {
        it: ["Aperol", "Succo Arancia", "Vino Bianco", "Miele"],
        en: ["Aperol", "Orange Juice", "White Wine", "Honey"],
        fr: ["Aperol", "Jus d'Orange", "Vin Blanc", "Miel"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sw8",
      name: "Mojito al Kiwi",
      ingredients: {
        it: ["Zucchero", "Lime", "Menta", "Rum", "Soda", "Kiwi"],
        en: ["Sugar", "Lime", "Mint", "Rum", "Soda", "Kiwi"],
        fr: ["Sucre", "Citron Vert", "Menthe", "Rhum", "Soda", "Kiwi"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1579207037706-e7e0e7a2d48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW50ZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  estate: [
    {
      id: "se1",
      name: "Amaroni",
      ingredients: {
        it: ["Campari", "Vermouth Rosso", "Amaretto", "Amarena"],
        en: ["Campari", "Red Vermouth", "Amaretto", "Black Cherry"],
        fr: ["Campari", "Vermouth Rouge", "Amaretto", "Griotte"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se2",
      name: "Gin Fizz Estivo",
      ingredients: {
        it: ["Gin", "Zucchero", "Limone", "Pompelmo", "Tonica", "Rosmarino"],
        en: ["Gin", "Sugar", "Lemon", "Grapefruit", "Tonic", "Rosemary"],
        fr: ["Gin", "Sucre", "Citron", "Pamplemousse", "Tonic", "Romarin"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se3",
      name: "Mule Estivo",
      ingredients: {
        it: ["Limoncello", "Ginger Beer", "Basilico in foglie"],
        en: ["Limoncello", "Ginger Beer", "Basil Leaves"],
        fr: ["Limoncello", "Ginger Beer", "Feuilles de Basilic"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se4",
      name: "Spritz alla Pesca",
      ingredients: {
        it: ["Aperol", "Liquore alla Pesca", "Prosecco", "Soda", "Basilico in foglie"],
        en: ["Aperol", "Peach Liqueur", "Prosecco", "Soda", "Basil Leaves"],
        fr: ["Aperol", "Liqueur de Pêche", "Prosecco", "Soda", "Feuilles de Basilic"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se5",
      name: "Mojito Estivo",
      ingredients: {
        it: ["Lime", "Zucchero", "Basilico in foglie", "Limoncello", "Soda"],
        en: ["Lime", "Sugar", "Basil Leaves", "Limoncello", "Soda"],
        fr: ["Citron Vert", "Sucre", "Feuilles de Basilic", "Limoncello", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "se6",
      name: "Mojito Pesca e Basilico",
      ingredients: {
        it: ["Lime", "Zucchero", "Basilico in foglie", "Sciroppo di Pesca", "Rum", "Soda"],
        en: ["Lime", "Sugar", "Basil Leaves", "Peach Syrup", "Rum", "Soda"],
        fr: ["Citron Vert", "Sucre", "Feuilles de Basilic", "Sirop de Pêche", "Rhum", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1543339396-981f33f06b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdW1tZXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjY1Nzc5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
};
export const productsNight = {
  classici: [
    {
      id: "c1",
      name: "Ten Sour",
      ingredients: {
        it: ["Tanqueray Ten", "Sour"],
        en: ["Tanqueray Ten", "Sour"],
        fr: ["Tanqueray Ten", "Sour"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c2",
      name: "Americano",
      ingredients: {
        it: ["Vermouth Rosso", "Campari", "Soda"],
        en: ["Sweet Vermouth", "Campari", "Soda Water"],
        fr: ["Vermouth Rouge", "Campari", "Eau Gazeuse"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c3",
      name: "Negroni",
      ingredients: {
        it: ["Vermouth Rosso", "Campari", "Gin"],
        en: ["Sweet Vermouth", "Campari", "Gin"],
        fr: ["Vermouth Rouge", "Campari", "Gin"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c4",
      name: "Negrito",
      ingredients: {
        it: ["Vermouth Rosso", "Campari", "Rum Zacapa"],
        en: ["Sweet Vermouth", "Campari", "Zacapa Rum"],
        fr: ["Vermouth Rouge", "Campari", "Rhum Zacapa"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c5",
      name: "Boulevardier",
      ingredients: {
        it: ["Vermouth Rosso", "Campari", "Rye Whiskey"],
        en: ["Sweet Vermouth", "Campari", "Rye Whiskey"],
        fr: ["Vermouth Rouge", "Campari", "Whiskey de Seigle"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c6",
      name: "Negroni nel Bosco",
      ingredients: {
        it: ["Vermouth Rosso", "Campari", "Gin", "Frutti di Bosco"],
        en: ["Sweet Vermouth", "Campari", "Gin", "Wild Berries"],
        fr: ["Vermouth Rouge", "Campari", "Gin", "Fruits des Bois"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c7",
      name: "Gin Tonic",
      ingredients: {
        it: ["Gin", "Tonica"],
        en: ["Gin", "Tonic Water"],
        fr: ["Gin", "Eau Tonique"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c8",
      name: "Gin Lemon",
      ingredients: {
        it: ["Gin", "Lemonsoda"],
        en: ["Gin", "Lemon Soda"],
        fr: ["Gin", "Limonade"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c9",
      name: "Gin Fizz",
      ingredients: {
        it: ["Gin", "Tonica", "Sour"],
        en: ["Gin", "Tonic Water", "Sour"],
        fr: ["Gin", "Eau Tonique", "Sour"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c10",
      name: "Tequila Sunrise",
      ingredients: {
        it: ["Tequila Casamigos", "Succo Arancia", "Granatina"],
        en: ["Casamigos Tequila", "Orange Juice", "Grenadine"],
        fr: ["Tequila Casamigos", "Jus d'Orange", "Grenadine"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c11",
      name: "Cosmopolitan",
      ingredients: {
        it: ["Vodka", "Triple Sec", "Lime", "Succo Cranberry"],
        en: ["Vodka", "Triple Sec", "Lime", "Cranberry Juice"],
        fr: ["Vodka", "Triple Sec", "Citron Vert", "Jus de Canneberge"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c12",
      name: "Amaretto Cooler",
      ingredients: {
        it: ["Amaretto Disaronno", "Succo Arancia", "Sour", "Cranberry"],
        en: ["Amaretto Disaronno", "Orange Juice", "Sour", "Cranberry Juice"],
        fr: ["Amaretto Disaronno", "Jus d'Orange", "Sour", "Jus de Canneberge"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c13",
      name: "Electric Lemonade",
      ingredients: {
        it: ["Vodka", "Blue Curaçao", "Sour", "Lemonsoda"],
        en: ["Vodka", "Blue Curaçao", "Sour", "Lemon Soda"],
        fr: ["Vodka", "Curaçao Bleu", "Sour", "Limonade"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c14",
      name: "Margarita",
      ingredients: {
        it: ["Tequila Casamigos", "Triple Sec", "Sour", "Lime"],
        en: ["Casamigos Tequila", "Triple Sec", "Sour", "Lime"],
        fr: ["Tequila Casamigos", "Triple Sec", "Sour", "Citron Vert"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c15",
      name: "Rossini",
      ingredients: {
        it: ["Polpa Fragola", "Prosecco"],
        en: ["Strawberry Puree", "Prosecco"],
        fr: ["Purée de Fraise", "Prosecco"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c16",
      name: "Bellini",
      ingredients: {
        it: ["Polpa Pesca", "Prosecco"],
        en: ["Peach Puree", "Prosecco"],
        fr: ["Purée de Pêche", "Prosecco"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c17",
      name: "Midori Sour",
      ingredients: {
        it: ["Midori", "Sour"],
        en: ["Midori", "Sour"],
        fr: ["Midori", "Sour"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c18",
      name: "Lady Ciroc",
      ingredients: {
        it: ["Vodka", " Sciroppo di Viola", "Triple Sec", "Sour"],
        en: ["Vodka", "Violet Syrup", "Triple Sec", "Sour"],
        fr: ["Vodka", "Sirop de Violette", "Triple Sec", "Sour"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c19",
      name: "Moscow Mule",
      ingredients: {
        it: ["Lime", "Vodka", "Ginger Beer"],
        en: ["Lime", "Vodka", "Ginger Beer"],
        fr: ["Citron Vert", "Vodka", "Ginger Beer"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "c20",
      name: "London Mule",
      ingredients: {
        it: ["Lime", "Gin", "Ginger Beer"],
        en: ["Lime", "Gin", "Ginger Beer"],
        fr: ["Citron Vert", "Gin", "Ginger Beer"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  pestati: [
    {
      id: "p1",
      name: "Caipiroska",
      ingredients: {
        it: ["Vodka", "Lime", "Zucchero", "(Gusti: Frutti di Bosco, Fragola, Viola, Pesca)"],
        en: ["Vodka", "Lime", "Sugar", "(Flavors: Wild Berries, Strawberry, Violet, Peach)"],
        fr: ["Vodka", "Citron Vert", "Sucre", "(Parfums: Fruits des Bois, Fraise, Violette, Pêche)"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p2",
      name: "Caipirinha",
      ingredients: {
        it: ["Lime", "Zucchero", "Cachaça"],
        en: ["Lime", "Sugar", "Cachaça"],
        fr: ["Citron Vert", "Sucre", "Cachaça"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p3",
      name: "Rum Cooler",
      ingredients: {
        it: ["Rum Scuro", "Lime", "Arancia", "Zucchero", "Ginger Ale"],
        en: ["Dark Rum", "Lime", "Orange", "Sugar", "Ginger Ale"],
        fr: ["Rhum Brun", "Citron Vert", "Orange", "Sucre", "Ginger Ale"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p4",
      name: "Mojito",
      ingredients: {
        it: ["Rum", "Lime", "Zucchero", "Menta in Foglie", "Soda"],
        en: ["Rum", "Lime", "Sugar", "Mint Leaves", "Soda Water"],
        fr: ["Rhum", "Citron Vert", "Sucre", "Feuilles de Menthe", "Eau Gazeuse"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p5",
      name: "Black Mojito",
      ingredients: {
        it: ["Rum Chiaro", "Liquore alla Liquirizia", "Lime", "Zucchero", "Menta in Foglie", "Soda"],
        en: ["Light Rum", "Licorice Liqueur", "Lime", "Sugar", "Mint Leaves", "Soda Water"],
        fr: ["Rhum Blanc", "Liqueur de Réglisse", "Citron Vert", "Sucre", "Feuilles de Menthe", "Eau Gazeuse"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p6",
      name: "Mojito Limoncello",
      ingredients: {
        it: ["Rum Chiaro", "Limoncello", "Lime", "Zucchero", "Menta in Foglie", "Soda"],
        en: ["Light Rum", "Limoncello", "Lime", "Sugar", "Mint Leaves", "Soda Water"],
        fr: ["Rhum Blanc", "Limoncello", "Citron Vert", "Sucre", "Feuilles de Menthe", "Eau Gazeuse"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p7",
      name: "Mojito al Mirtillo",
      ingredients: {
        it: ["Rum Chiaro", "Lime", "Zucchero", "Menta in Foglie", "Mirtillo", "Soda"],
        en: ["Light Rum", "Lime", "Sugar", "Mint Leaves", "Blueberry", "Soda Water"],
        fr: ["Rhum Blanc", "Citron Vert", "Sucre", "Feuilles de Menthe", "Myrtille", "Eau Gazeuse"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p8",
      name: "Mojito Zenzero",
      ingredients: {
        it: ["Rum Chiaro", "Lime", "Zucchero", "Menta in Foglie", "Zenzero", "Soda"],
        en: ["Light Rum", "Lime", "Sugar", "Mint Leaves", "Ginger", "Soda Water"],
        fr: ["Rhum Blanc", "Citron Vert", "Sucre", "Feuilles de Menthe", "Gingembre", "Eau Gazeuse"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "p9",
      name: "Boschetto",
      ingredients: {
        it: ["Lime", "Zucchero", "Frutti di Bosco", "Vodka", "Ananas", "Tonica"],
        en: ["Lime", "Sugar", "Wild Berries", "Vodka", "Pineapple", "Tonic Water"],
        fr: ["Citron Vert", "Sucre", "Fruits des Bois", "Vodka", "Ananas", "Eau Tonique"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  icedTea: [
    {
      id: "it1",
      name: "Long Island Iced Tea",
      ingredients: {
        it: ["Vodka", "Gin", "Rum Chiaro", "Triple Sec", "Sour", "Coca Cola"],
        en: ["Vodka", "Gin", "Light Rum", "Triple Sec", "Sour", "Coca-Cola"],
        fr: ["Vodka", "Gin", "Rhum Blanc", "Triple Sec", "Sour", "Coca-Cola"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "it2",
      name: "Italian Iced Tea",
      ingredients: {
        it: ["Vodka", "Gin", "Rum Chiaro", "Amaretto Disaronno", "Sour", "Coca Cola"],
        en: ["Vodka", "Gin", "Light Rum", "Amaretto Disaronno", "Sour", "Coca-Cola"],
        fr: ["Vodka", "Gin", "Rhum Blanc", "Amaretto Disaronno", "Sour", "Coca-Cola"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "it3",
      name: "Japanese Iced Tea",
      ingredients: {
        it: ["Vodka", "Gin", "Rum Chiaro", "Midori", "Sour", "Lemonsoda"],
        en: ["Vodka", "Gin", "Light Rum", "Midori", "Sour", "Lemon Soda"],
        fr: ["Vodka", "Gin", "Rhum Blanc", "Midori", "Sour", "Limonade"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "it4",
      name: "Miami Iced Tea",
      ingredients: {
        it: ["Vodka", "Gin", "Rum Chiaro", "Blue Curaçao", "Sour", "Lemonsoda"],
        en: ["Vodka", "Gin", "Light Rum", "Blue Curaçao", "Sour", "Lemon Soda"],
        fr: ["Vodka", "Gin", "Rhum Blanc", "Curaçao Bleu", "Sour", "Limonade"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "it5",
      name: "Mexican Iced Tea",
      ingredients: {
        it: ["Tequila", "Gin", "Vodka", "Rum Chiaro", "Sour", "Pompelmo"],
        en: ["Tequila", "Gin", "Vodka", "Light Rum", "Sour", "Grapefruit"],
        fr: ["Tequila", "Gin", "Vodka", "Rhum Blanc", "Sour", "Pamplemousse"],
      },
      price: {
        it: ["€8,00"],
        en: ["€8,00"],
        fr: ["€8,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  sexy: [
    {
      id: "sex1",
      name: "Sex on the Beach",
      ingredients: {
        it: ["Vodka", "Peach Tree", "Arancia", "Cranberry"],
        en: ["Vodka", "Peach Liqueur", "Orange", "Cranberry Juice"],
        fr: ["Vodka", "Liqueur de Pêche", "Orange", "Jus de Canneberge"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sex2",
      name: "Sex on the Sofa",
      ingredients: {
        it: ["Vodka", "Peach Tree", "Ananas", "Cranberry"],
        en: ["Vodka", "Peach Liqueur", "Pineapple", "Cranberry Juice"],
        fr: ["Vodka", "Liqueur de Pêche", "Ananas", "Jus de Canneberge"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sex3",
      name: "Sex in the City",
      ingredients: {
        it: ["Martini Bianco", "Vodka Fragola", "Arancia", "Cranberry"],
        en: ["Martini Bianco", "Strawberry Vodka", "Orange", "Cranberry Juice"],
        fr: ["Martini Bianco", "Vodka à la Fraise", "Orange", "Jus de Canneberge"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sex4",
      name: "Sex at My House",
      ingredients: {
        it: ["Vodka", "Amaretto Disaronno", "Lampone", "Ananas", "Cranberry"],
        en: ["Vodka", "Amaretto Disaronno", "Raspberry", "Pineapple", "Cranberry Juice"],
        fr: ["Vodka", "Amaretto Disaronno", "Framboise", "Ananas", "Jus de Canneberge"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "sex5",
      name: "Sex with Henry",
      ingredients: {
        it: ["Vodka", "Passoa", "Ananas", "Cranberry"],
        en: ["Vodka", "Passoa", "Pineapple", "Cranberry Juice"],
        fr: ["Vodka", "Passoa", "Ananas", "Jus de Canneberge"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1628104889509-32204c32b504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb2NrdGFpbCUyMGdyb3VwX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  analcolici: [
    {
      id: "a1",
      name: "Pescacolada",
      ingredients: {
        it: ["Succo Pesca", "Succo Ananas", "Sciroppo di Cocco"],
        en: ["Peach Juice", "Pineapple Juice", "Coconut Syrup"],
        fr: ["Jus de Pêche", "Jus d'Ananas", "Sirop de Coco"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a2",
      name: "Virgin Colada",
      ingredients: {
        it: ["Succo Ananas", "Sciroppo di Cocco"],
        en: ["Pineapple Juice", "Coconut Syrup"],
        fr: ["Jus d'Ananas", "Sirop de Coco"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a3",
      name: "Strawberry Virgin Colada",
      ingredients: {
        it: ["Succo Ananas", "Polpa Fragola", "Sciroppo Cocco"],
        en: ["Pineapple Juice", "Strawberry Puree", "Coconut Syrup"],
        fr: ["Jus d'Ananas", "Pulpe de Fraise", "Sirop de Coco"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a4",
      name: "Florida",
      ingredients: {
        it: ["Succo Arancia", "Succo Pompelmo", "Limone", "Zucchero", "Soda"],
        en: ["Orange Juice", "Grapefruit Juice", "Lemon", "Sugar", "Soda Water"],
        fr: ["Jus d'Orange", "Jus de Pamplemousse", "Citron", "Sucre", "Eau Gazeuse"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a5",
      name: "Apple Fresh",
      ingredients: {
        it: ["Mela", "Cranberry"],
        en: ["Apple", "Cranberry"],
        fr: ["Pomme", "Canneberge"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a6",
      name: "New Sensation",
      ingredients: {
        it: ["Succo Ananas", "Succo Arancia", "Polpa Fragola"],
        en: ["Pineapple Juice", "Orange Juice", "Strawberry Puree"],
        fr: ["Jus d'Ananas", "Jus d'Orange", "Pulpe de Fraise"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a7",
      name: "Havana",
      ingredients: {
        it: ["Succo Arancia", "Limone", "Sciroppo di Fragola", "Aranciata"],
        en: ["Orange Juice", "Lemon", "Strawberry Syrup", "Orange Soda"],
        fr: ["Jus d'Orange", "Citron", "Sirop de Fraise", "Limonade à l'Orange"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a8",
      name: "Angel",
      ingredients: {
        it: ["Mela Verde", "Limone", "Polpa Kiwi", "Tonica"],
        en: ["Green Apple", "Lemon", "Kiwi Puree", "Tonic Water"],
        fr: ["Pomme Verte", "Citron", "Pulpe de Kiwi", "Eau Tonique"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "a9",
      name: "Peter",
      ingredients: {
        it: ["Succo Ananas", "Limone", "Frutti di Bosco", "Tonica"],
        en: ["Pineapple Juice", "Lemon", "Mixed Berries", "Tonic Water"],
        fr: ["Jus d'Ananas", "Citron", "Fruits des Bois", "Eau Tonique"],
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"],
      },
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2a99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NrdGFpbCUyMGZyZXNoX2VufDF8fHx8MTc2MjQyNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  analcoliciPremium: [
    {
      id: "anap1",
      name: "Gin Tonic Zero",
      ingredients: {
        it: ["Gin Tanqueray 0.0", "Tonica"],
        en: ["Tanqueray 0.0 Gin", "Tonic Water"],
        fr: ["Gin Tanqueray 0.0", "Eau tonique"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1634496064950-02f043806b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWdyb25pJTIwY29ja3RhaWx8ZW58MXx8fHwxNzYzOTY1NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap2",
      name: "Negroni Zero",
      ingredients: {
        it: ["Freely Vermouth", "Freely Bitter", "Gin Tanqueray 0.0"],
        en: ["Freely Vermouth", "Freely Bitter", "Tanqueray 0.0 Gin"],
        fr: ["Freely Vermouth", "Freely Bitter", "Gin Tanqueray 0.0"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap3",
      name: "Americano Zero",
      ingredients: {
        it: ["Freely Vermouth", "Freely Bitter", "Soda"],
        en: ["Freely Vermouth", "Freely Bitter", "Soda"],
        fr: ["Freely Vermouth", "Freely Bitter", "Soda"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap4",
      name: "Spritz Zero",
      ingredients: {
        it: ["Freely Aperol", "Tonica"],
        en: ["Freely Aperol", "Tonic Water"],
        fr: ["Freely Aperol", "Eau tonique"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap5",
      name: "Ipa No Alcol",
      ingredients: {
        it: ["IPA Analcolica", "0.0% vol", "0.33L"],
        en: ["Non-Alcoholic IPA", "0.0% vol", "0.33L"],
        fr: ["IPA Sans Alcool", "0.0% vol", "0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "anap6",
      name: "Lager No Alcol",
      ingredients: {
        it: ["Lager Analcolica", "0.0% vol", "0.33L"],
        en: ["Non-Alcoholic Lager", "0.0% vol", "0.33L"],
        fr: ["Lager Sans Alcool", "0.0% vol", "0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1673090431108-014275c62265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhbmFsY29saWNpJTIwZHJpbmt8ZW58MXx8fHwxNzYzOTY1NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  stagionali: stagionalProductsNight[stagioneCorrente],
  hotdrink: [
    {
      id: "hd1",
      name: "Spritz Caldo",
      ingredients: {
        it: ["Aperol", "Vino Bianco", "Sidro di Mele", "Cannella"],
        en: ["Aperol", "White Wine", "Apple Cider", "Cinnamon"],
        fr: ["Aperol", "Vin Blanc", "Cidre de Pomme", "Cannelle"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd2",
      name: "Spritz Caldo N°2",
      ingredients: {
        it: ["Aperol", "Vino Bianco", "Succo d'Arancia", "Miele"],
        en: ["Aperol", "White Wine", "Orange Juice", "Honey"],
        fr: ["Aperol", "Vin Blanc", "Jus d'Orange", "Miel"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd3",
      name: "Sangria Calda",
      ingredients: {
        it: ["Vino Rosso", "Rum Scuro", "Succo d'Arancia", "Zucchero", "Infuso di Frutti di Bosco"],
        en: ["Red Wine", "Dark Rum", "Orange Juice", "Sugar", "Wild Berries Infusion"],
        fr: ["Vin Rouge", "Rhum Ambré", "Jus d'Orange", "Sucre", "Infusion de Fruits des Bois"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd4",
      name: "Sidrum",
      ingredients: {
        it: ["Rum", "Sidro di Mele"],
        en: ["Rum", "Apple Cider"],
        fr: ["Rhum", "Cidre de Pomme"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "hd5",
      name: "Negroni Caldo",
      ingredients: {
        it: ["Campari", "Martini Rosso", "Succo d'Arancia"],
        en: ["Campari", "Martini Rosso", "Orange Juice"],
        fr: ["Campari", "Martini Rosso", "Jus d'Orange"],
      },
      price: {
        it: ["€7,00"],
        en: ["€7,00"],
        fr: ["€7,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    }
  ],
  vini: [
    {
      id: "v1",
      name: "Nebbiolo",
      ingredients: {
        it: ["Nebbiolo", "Piemonte", "Rosso"],
        en: ["Nebbiolo", "Piedmont", "Red"],
        fr: ["Nebbiolo", "Piémont", "Rouge"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: "https://images.unsplash.com/photo-1598516087522-875c742c019d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3aW5lJTIwZ2xhc3NfMi9lbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Red Wine
    },
    {
      id: "v2",
      name: "Barbera",
      ingredients: {
        it: ["Barbera", "Piemonte", "Rosso"],
        en: ["Barbera", "Piedmont", "Red"],
        fr: ["Barbera", "Piémont", "Rouge"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: barberaAstiImage
    },
    {
      id: "v3",
      name: "La Bifa",
      ingredients: {
        it: ["Barbera", "Pinerolese (Piemonte)", "Rosso"],
        en: ["Barbera", "Pinerolese (Piedmont)", "Red"],
        fr: ["Barbera", "Pinerolese (Piémont)", "Rouge"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"]
      },
      image: barberaBifaImage
    },
    {
      id: "v4",
      name: "Primitivo",
      ingredients: {
        it: ["Primitivo", "Puglia", "Rosso"],
        en: ["Primitivo", "Apulia", "Red"],
        fr: ["Primitivo", "Pouilles", "Rouge"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"]
      },
      image: primitivoImage
    },
    {
      id: "v5",
      name: "Valdobbiadene",
      ingredients: {
        it: ["Glera", "Veneto", "Prosecco"],
        en: ["Glera", "Veneto", "Prosecco"],
        fr: ["Glera", "Vénétie", "Prosecco"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: valdobbiadeneImage
    },
    {
      id: "v6",
      name: "Treviso",
      ingredients: {
        it: ["Glera", "Veneto", "Prosecco"],
        en: ["Glera", "Veneto", "Prosecco"],
        fr: ["Glera", "Vénétie", "Prosecco"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: trevisoImage
    },
    {
      id: "v7",
      name: "Arneis",
      ingredients: {
        it: ["Arneis", "Piemonte", "Bianco Fermo"],
        en: ["Arneis", "Piedmont", "Still White"],
        fr: ["Arneis", "Piémont", "Blanc tranquille"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: arneisImage
    },
    {
      id: "v8",
      name: "Gewürztraminer",
      ingredients: {
        it: ["Gewürztraminer", "Alto Adige", "Bianco Fermo"],
        en: ["Gewürztraminer", "Alto Adige", "Still White"],
        fr: ["Gewürztraminer", "Haut-Adige", "Blanc tranquille"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: traminerImage
    },
    {
      id: "v9",
      name: "Falanghina",
      ingredients: {
        it: ["Falanghina", "Campania", "Bianco Fermo"],
        en: ["Falanghina", "Campania", "Still White"],
        fr: ["Falanghina", "Campanie", "Blanc tranquille"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: falanghinaImage
    },
    {
      id: "v10",
      name: "Kikè",
      ingredients: {
        it: ["Moscato", "Sicilia", "Bianco Fermo"],
        en: ["Moscato", "Sicily", "Still White"],
        fr: ["Moscato", "Sicile", "Blanc tranquille"],
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"],
      },
      image: kikeImage
    },
    {
      id: "v11",
      name: "Rosé",
      ingredients: {
        it: ["Glera e Pinot Nero", "Valdobbiadene (Veneto)", "Rosé"],
        en: ["Glera and Pinot Noir", "Valdobbiadene (Veneto)", "Rosé"],
        fr: ["Glera et Pinot Noir", "Valdobbiadene (Vénétie)", "Rosé"]
      },
      price: {
        it: ["€6,00/calice"],
        en: ["€6,00/glass"],
        fr: ["€6,00/verre"]
      },
      image: roseImage
    },
  ],
  birreSpina: [
    {
      id: "bs1",
      name: "Stella Artois Media",
      ingredients: {
        it: ["Lager", "4.5% vol"],
        en: ["Lager", "4.5% vol"],
        fr: ["Lager", "4.5% vol"],
      },
      price: {
        it: ["€5,50/0.5L"],
        en: ["€5,50/0.5L"],
        fr: ["€5,50/0.5L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Birra alla Spina
    },
    {
      id: "bs2",
      name: "Stella Artois Piccola",
      ingredients: {
        it: ["Lager", "4.5% vol"],
        en: ["Lager", "4.5% vol"],
        fr: ["Lager", "4.5% vol"],
      },
      price: {
        it: ["€4,00/0.25L"],
        en: ["€4,00/0.25L"],
        fr: ["€4,00/0.25L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Birra alla Spina
    },
    {
      id: "bs3",
      name: "Leffe Rossa",
      ingredients: {
        it: ["Dubbel", "6.6% vol"],
        en: ["Dubbel", "6.6% vol"],
        fr: ["Dubbel", "6.6% vol"],
      },
      price: {
        it: ["€6,00/0.4L"],
        en: ["€6,00/0.4L"],
        fr: ["€6,00/0.4L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bs4",
      name: "Leffe Bionda",
      ingredients: {
        it: ["Blonde Ale", "6.6% vol"],
        en: ["Blonde Ale", "6.6% vol"],
        fr: ["Blonde Ale", "6.6% vol"],
      },
      price: {
        it: ["€6,00/0.4L"],
        en: ["€6,00/0.4L"],
        fr: ["€6,00/0.4L"],
      },
      image: "https://images.unsplash.com/photo-1571219972740-1a66e6c21e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJyYSUyMGFsbGElMjBzcGluYXxlbnwxfHx8fDE3NjI0MjY4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
  birreBott: [
    {
      id: "bb1",
      name: "Beck's",
      ingredients: {
        it: ["Premium Lager", "5.0% vol", "0.33L"],
        en: ["Premium Lager", "5.0% vol", "0.33L"],
        fr: ["Lager Premium", "5.0% vol", "0.33L"],
      },
      price: {
        it: ["€4,50"],
        en: ["€4,50"],
        fr: ["€4,50"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bottiglia di Birra
    },
    {
      id: "bb2",
      name: "Corona",
      ingredients: {
        it: ["Lager Messicana", "4.5% vol", "0.33L"],
        en: ["Mexican Lager", "4.5% vol", "0.33L"],
        fr: ["Lager Mexicaine", "4.5% vol", "0.33L"],
      },
      price: {
        it: ["€4,50"],
        en: ["€4,50"],
        fr: ["€4,50"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb3",
      name: "Heineken",
      ingredients: {
        it: ["Pale Lager", "5.0% vol", "0.33L"],
        en: ["Pale Lager", "5.0% vol", "0.33L"],
        fr: ["Pale Lager", "5.0% vol", "0.33L"],
      },
      price: {
        it: ["€4,50"],
        en: ["€4,50"],
        fr: ["€4,50"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb4",
      name: "Tennent's",
      ingredients: {
        it: ["Strong Lager", "9.0% vol", "0.33L"],
        en: ["Strong Lager", "9.0% vol", "0.33L"],
        fr: ["Lager Forte", "9.0% vol", "0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb5",
      name: "Bud",
      ingredients: {
        it: ["American Lager", "5.0% vol", "0.33L"],
        en: ["American Lager", "5.0% vol", "0.33L"],
        fr: ["Lager Américaine", "5.0% vol", "0.33L"],
      },
      price: {
        it: ["€4,50"],
        en: ["€4,50"],
        fr: ["€4,50"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb6",
      name: "Ichnusa",
      ingredients: {
        it: ["Pale Lager", "4.7% vol", "0.33L"],
        en: ["Pale Lager", "4.7% vol", "0.33L"],
        fr: ["Pale Lager", "4.7% vol", "0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1543884393-d78401340156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWVyJTIwYm90dGxlfGVufDF8fHx8MTc2MjQyNjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "bb7",
      name: "Ceres",
      ingredients: {
        it: ["Strong Lager", "7.7% vol", "0.33L"],
        en: ["Strong Lager", "7.7% vol", "0.33L"],
        fr: ["Strong Lager", "7.7% vol", "0.33L"],
      },
      price: {
        it: ["€4,50"],
        en: ["€4,50"],
        fr: ["€4,50"],
      },
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwYm90dGxlfGVufDB8fHx8MTcwOTI0NjgyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  bibite: [
    {
      id: "l1",
      name: "Coca-Cola",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Immagine Bibite
    },
    {
      id: "l2",
      name: "Coca-Cola Zero",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l3",
      name: "The Pesca",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l4",
      name: "The Limone",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l5",
      name: "Sprite",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l6",
      name: "Fanta",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l7",
      name: "Lemon Soda",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l8",
      name: "Crodino",
      ingredients: {
        it: ["0.10L"],
        en: ["0.10L"],
        fr: ["0.10L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l9",
      name: "Chinotto",
      ingredients: {
        it: ["0.33L"],
        en: ["0.33L"],
        fr: ["0.33L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l10",
      name: "Schweppes",
      ingredients: {
        it: ["0.18L"],
        en: ["0.18L"],
        fr: ["0.18L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l11",
      name: "Succo Pesca",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l12",
      name: "Succo Pera",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l13",
      name: "Succo Mirtillo",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l14",
      name: "Succo Ananas",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
    {
      id: "l15",
      name: "Succo Pompelmo",
      ingredients: {
        it: ["0.20L"],
        en: ["0.20L"],
        fr: ["0.20L"],
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"],
      },
      image: "https://images.unsplash.com/photo-1558223617-6d2746401037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhJTIwYm90dGxlJTIwZmFudGElMjBjb2NhY29sYXxlbnwxfHx8fDE3NjI0MjY4MjZ8MA&ixlib=rb-4.1.0&q=80&utm_source=figma&utm_medium=referral",
    },
  ],
  gin: [
    {
      "id": "g1",
      "name": "Tanqueray 0.0",
      "ingredients": {
        "it": ["Gin analcolico stile London Dry, prodotto in Inghilterra."],
        "en": ["Non-alcoholic London Dry style gin, made in England."],
        "fr": ["Gin sans alcool style London Dry, produit en Angleterre."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": tanqueray00Image
    },
    {
      "id": "g2",
      "name": "Tanqueray",
      "ingredients": {
        "it": ["Gin secco (London Dry), profilo classico, distillato in Inghilterra."],
        "en": ["Dry (London Dry) gin, classic profile, distilled in England."],
        "fr": ["Gin sec (London Dry), profil classique, distillé en Angleterre."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": tanquerayImage
    },
    {
      "id": "g3",
      "name": "Tanq. Sevilla",
      "ingredients": {
        "it": ["Gin aromatico e agrumato all'arancia, prodotto in Inghilterra."],
        "en": ["Aromatic and citrus (orange) gin, made in England."],
        "fr": ["Gin aromatique et d'agrumes (orange), produit en Angleterre."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": tanqueraySevillaImage
    },
    {
      "id": "g4",
      "name": "Tanq. Rangpur",
      "ingredients": {
        "it": ["Gin aromatico e speziato con lime Rangpur, prodotto in Inghilterra."],
        "en": ["Aromatic and spiced gin with Rangpur lime, made in England."],
        "fr": ["Gin aromatique et épicé avec citron vert Rangpur, produit en Angleterre."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": tanquerayRangpurImage
    },
    {
      "id": "g5",
      "name": "Bombay Sapphire",
      "ingredients": {
        "it": ["Gin secco (London Dry), aromatico e floreale, prodotto in Inghilterra."],
        "en": ["Dry (London Dry) gin, aromatic and floral, made in England."],
        "fr": ["Gin sec (London Dry), aromatique et floral, produit en Angleterre."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": bombayImage
    },
    {
      "id": "g6",
      "name": "Portobello Road",
      "ingredients": {
        "it": ["Gin secco (London Dry) dal profilo tradizionale, prodotto nel Regno Unito."],
        "en": ["Dry (London Dry) gin with a traditional profile, made in the United Kingdom."],
        "fr": ["Gin sec (London Dry) au profil traditionnel, produit au Royaume-Uni."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": portobelloImage
    },
    {
      "id": "g7",
      "name": "Barber's",
      "ingredients": {
        "it": ["Gin secco (London Dry), classico e pulito, dal Regno Unito."],
        "en": ["Dry (London Dry) gin, classic and clean, from the United Kingdom."],
        "fr": ["Gin sec (London Dry), classique et net, du Royaume-Uni."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": barbersImage
    },
    {
      "id": "g8",
      "name": "Bulldog",
      "ingredients": {
        "it": ["Gin secco (London Dry), moderno, con note floreali ed erbacee, dal Regno Unito."],
        "en": ["Dry (London Dry) gin, modern, with floral and herbal notes, from the United Kingdom."],
        "fr": ["Gin sec (London Dry), moderne, aux notes florales et herbacées, du Royaume-Uni."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": bulldogImage
    },
    {
      "id": "g9",
      "name": "Fifty Pounds",
      "ingredients": {
        "it": ["Gin secco (London Dry), classico con dominante di ginepro, dall'Inghilterra."],
        "en": ["Dry (London Dry) gin, classic with a dominant juniper profile, from England."],
        "fr": ["Gin sec (London Dry), classique à dominante de genièvre, d'Angleterre."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": fiftyPoundsImage
    },
    {
      "id": "g10",
      "name": "Citadelle",
      "ingredients": {
        "it": ["Gin aromatico, speziato e floreale con 19 botaniche, dalla Francia."],
        "en": ["Aromatic gin, spicy and floral with 19 botanicals, from France."],
        "fr": ["Gin aromatique, épicé et floral avec 19 plantes, de France."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": citadelleImage
    },
    {
      "id": "g11",
      "name": "Hendrick's",
      "ingredients": {
        "it": ["Gin aromatico e floreale con infusione di rosa e cetriolo, dalla Scozia."],
        "en": ["Aromatic and floral gin infused with rose and cucumber, from Scotland."],
        "fr": ["Gin aromatique et floral infusé à la rose et au concombre, d'Écosse."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": hendricksImage
    },
    {
      "id": "g12",
      "name": "Haymans Old Tom",
      "ingredients": {
        "it": ["Gin Old Tom (leggermente dolce e morbido), dal profilo agrumato, dall'Inghilterra."],
        "en": ["Old Tom gin (slightly sweet and soft), with a citrus profile, from England."],
        "fr": ["Gin Old Tom (légèrement doux et moelleux), au profil d'agrumes, d'Angleterre."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": haymansImage
    },
    {
      "id": "g13",
      "name": "Nordes",
      "ingredients": {
        "it": ["Gin aromatico e fruttato (base Albariño) con note marine, dalla Spagna (Galizia)."],
        "en": ["Aromatic and fruity gin (Albariño base) with marine notes, from Spain (Galicia)."],
        "fr": ["Gin aromatique et fruité (base Albariño) aux notes marines, d'Espagne (Galice)."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": nordesImage
    },
    {
      "id": "g14",
      "name": "Elephant",
      "ingredients": {
        "it": ["Gin aromatico ed erbaceo con botaniche africane, prodotto in Germania."],
        "en": ["Aromatic and herbal gin with African botanicals, made in Germany."],
        "fr": ["Gin aromatique et herbacé avec des plantes africaines, produit en Allemagne."]
      },
      "price": {
        "it": ["€12,00"],
        "en": ["€12,00"],
        "fr": ["€12,00"]
      },
      "image": elephantImage
    },
    {
      "id": "g15",
      "name": "Monbasa",
      "ingredients": {
        "it": ["Gin secco (London Dry), aromatico e speziato, ispirato al Kenya ma dal Regno Unito."],
        "en": ["Dry (London Dry) gin, aromatic and spicy, inspired by Kenya but from the United Kingdom."],
        "fr": ["Gin sec (London Dry), aromatique et épicé, inspiré du Kenya mais du Royaume-Uni."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": mombasaImage
    },
    {
      "id": "g16",
      "name": "Monkey",
      "ingredients": {
        "it": ["Gin dry (Schwarzwald Dry Gin), complesso con 47 botaniche, dalla Germania."],
        "en": ["Dry (Schwarzwald Dry Gin), complex with 47 botanicals, from Germany."],
        "fr": ["Gin sec (Schwarzwald Dry Gin), complexe avec 47 plantes, d'Allemagne."]
      },
      "price": {
        "it": ["€12,00"],
        "en": ["€12,00"],
        "fr": ["€12,00"]
      },
      "image": monkeyImage
    },
    {
      "id": "g17",
      "name": "N° 0",
      "ingredients": {
        "it": ["Gin secco (London Dry), classico e agrumato (No. 0 London Dry), dal Regno Unito."],
        "en": ["Dry (London Dry) gin, classic and citrusy (No. 0 London Dry), from the United Kingdom."],
        "fr": ["Gin sec (London Dry), classique et d'agrumes (No. 0 London Dry), du Royaume-Uni."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": n0Image
    },
    {
      "id": "g18",
      "name": "Mare",
      "ingredients": {
        "it": ["Gin aromatico e mediterraneo (oliva, basilico, timo), dalla Spagna."],
        "en": ["Aromatic and Mediterranean gin (olive, basil, thyme), from Spain."],
        "fr": ["Gin aromatique et méditerranéen (olive, basilic, thym), d'Espagne."]
      },
      "price": {
        "it": ["€11,00"],
        "en": ["€11,00"],
        "fr": ["€11,00"]
      },
      "image": mareImage
    },
    {
      "id": "g19",
      "name": "Roku",
      "ingredients": {
        "it": ["Gin aromatico e fresco, bilanciato con 6 botaniche Giapponesi, dal Giappone."],
        "en": ["Aromatic and fresh gin, balanced with 6 Japanese botanicals, from Japan."],
        "fr": ["Gin aromatique et frais, équilibré avec 6 plantes japonaises, du Japon."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": rokuImage
    },
    {
      "id": "g20",
      "name": "Malfy",
      "ingredients": {
        "it": ["Gin secco (stile Dry), classico con ginepro e limoni, dall'Italia."],
        "en": ["Dry style gin, classic with juniper and lemons, from Italy."],
        "fr": ["Gin sec (style Dry), classique avec genièvre et citrons, d'Italie."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": malfyImage
    },
    {
      "id": "g21",
      "name": "Malfy Limone",
      "ingredients": {
        "it": ["Gin aromatico e fresco con scorze di limone d'Amalfi, dall'Italia."],
        "en": ["Aromatic and fresh gin with Amalfi lemon peels, from Italy."],
        "fr": ["Gin aromatique et frais avec des écorces de citron d'Amalfi, d'Italie."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": malfyLimoneImage
    },
    {
      "id": "g22",
      "name": "Malfy Arancia",
      "ingredients": {
        "it": ["Gin aromatico con scorze di arancia rossa di Sicilia, dall'Italia."],
        "en": ["Aromatic gin with blood orange peels from Sicily, from Italy."],
        "fr": ["Gin aromatique avec des écorces d'orange sanguine de Sicile, d'Italie."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": malfyAranciaImage
    },
    {
      "id": "g23",
      "name": "Malfy Pompelmo",
      "ingredients": {
        "it": ["Gin aromatico e fruttato con pompelmo rosa di Sicilia, dall'Italia."],
        "en": ["Aromatic and fruity gin with pink grapefruit from Sicily, from Italy."],
        "fr": ["Gin aromatique et fruité au pamplemousse rose de Sicile, d'Italie."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": malfyPompelmoImage
    },
    {
      "id": "g24",
      "name": "Bordiga",
      "ingredients": {
        "it": ["Gin secco alpino (Occitan Gin), botaniche raccolte sulle Alpi, dall'Italia (Piemonte)."],
        "en": ["Dry alpine gin (Occitan Gin), botanicals collected in the Alps, from Italy (Piedmont)."],
        "fr": ["Gin sec alpin (Occitan Gin), plantes cueillies dans les Alpes, d'Italie (Piémont)."]
      },
      "price": {
        "it": ["€10,00"],
        "en": ["€10,00"],
        "fr": ["€10,00"]
      },
      "image": bordigaImage
    },
    {
      "id": "g25",
      "name": "Mazzetti",
      "ingredients": {
        "it": ["Gin secco (London Dry), balsamico e speziato, dall'Italia (Piemonte)."],
        "en": ["Dry (London Dry) gin, balsamic and spicy, from Italy (Piedmont)."],
        "fr": ["Gin sec (London Dry), balsamique et épicé, d'Italie (Piémont)."]
      },
      "price": {
        "it": ["€10,00"],
        "en": ["€10,00"],
        "fr": ["€10,00"]
      },
      "image": mazzettiImage
    },
    {
      "id": "g26",
      "name": "The London No. 1",
      "ingredients": {
        "it": ["Gin premium distillato quattro volte, con 12 botaniche. Prodotto in Inghilterra, si distingue per il suo colore blu acquamarina."],
        "en": ["Premium gin, quadruple-distilled, with 12 botanicals. Produced in England, it is distinguished by its aquamarine blue color."],
        "fr": ["Gin premium, quadruple distillation, avec 12 plantes. Produit en Angleterre, il se distingue par sa couleur bleu aigue-marine."]
      },
      "price": {
        "it": ["€10,00"],
        "en": ["€10,00"],
        "fr": ["€10,00"]
      },
      "image": londoN1Image
    },
    {
      "id": "g27",
      "name": "Etsu",
      "ingredients": {
        "it": ["Gin aromatico (Japanese Gin) con note di yuzu, floreali e tè, dal Giappone."],
        "en": ["Aromatic (Japanese Gin) with yuzu, floral and tea notes, from Japan."],
        "fr": ["Gin aromatique (Gin Japonais) aux notes de yuzu, florales et de thé, du Japon."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": etsuImage
    },
    {
      "id": "g28",
      "name": "Xoriguer Mahón",
      "ingredients": {
        "it": ["Gin tradizionale e artigianale, distillato in alambicchi di rame. Prodotto a Minorca (Spagna), ha un sapore deciso e marino."],
        "en": ["Traditional and artisanal gin, distilled in copper stills. Produced in Menorca (Spain), it has a strong, marine flavor."],
        "fr": ["Gin traditionnel et artisanal, distillé dans des alambics en cuivre. Produit à Minorque (Espagne), il a une saveur forte et marine."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": xoriguerImage
    }
  ],
  rum: [
    {
      "id": "r1",
      "name": "Pampero Especial",
      "ingredients": {
        "it": ["Rum invecchiato (Golden Rum), morbido, con note di vaniglia e caramello. Origine: Venezuela."],
        "en": ["Aged Rum (Golden Rum), smooth, with notes of vanilla and caramel. Origin: Venezuela."],
        "fr": ["Rhum vieilli (Golden Rum), doux, avec des notes de vanille et caramel. Origine: Venezuela."]
      },
      "price": {
        "it": ["€7,00"],
        "en": ["€7,00"],
        "fr": ["€7,00"]
      },
      "image": pamperoImage
    },
    {
      "id": "r2",
      "name": "Havana Club 7",
      "ingredients": {
        "it": ["Rum invecchiato 7 anni (Dark Rum), complesso, note di cacao, vaniglia e frutta tropicale. Origine: Cuba."],
        "en": ["Aged 7 years Rum (Dark Rum), complex, notes of cocoa, vanilla, and tropical fruit. Origin: Cuba."],
        "fr": ["Rhum vieilli 7 ans (Dark Rum), complexe, notes de cacao, vanille et fruits tropicaux. Origine: Cuba."]
      },
      "price": {
        "it": ["€7,00"],
        "en": ["€7,00"],
        "fr": ["€7,00"]
      },
      "image": havanaImage
    },
    {
      "id": "r3",
      "name": "Brugal Añejo",
      "ingredients": {
        "it": ["Rum invecchiato (Añejo), secco, con note di legno e caramello leggero. Origine: Repubblica Dominicana."],
        "en": ["Aged Rum (Añejo), dry, with notes of wood and light caramel. Origin: Dominican Republic."],
        "fr": ["Rhum vieilli (Añejo), sec, avec des notes de bois et de caramel léger. Origine: République Dominicaine."]
      },
      "price": {
        "it": ["€7,00"],
        "en": ["€7,00"],
        "fr": ["€7,00"]
      },
      "image": brugalImage
    },
    {
      "id": "r4",
      "name": "Matusalem 7 Anni",
      "ingredients": {
        "it": ["Rum invecchiato 7 anni (Golden Rum), morbido, stile cubano, note di burro e vaniglia. Origine: Repubblica Dominicana."],
        "en": ["Aged 7 years Rum (Golden Rum), smooth, Cuban style, notes of butter and vanilla. Origin: Dominican Republic."],
        "fr": ["Rhum vieilli 7 ans (Golden Rum), doux, style cubain, notes de beurre et vanille. Origine: République Dominicaine."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": matusalemImage
    },
    {
      "id": "r5",
      "name": "Flor de Caña 7 Anni",
      "ingredients": {
        "it": ["Rum invecchiato 7 anni (Slow Aged), full-bodied, note di cioccolato e frutta secca. Origine: Nicaragua."],
        "en": ["Aged 7 years Rum (Slow Aged), full-bodied, notes of chocolate and dried fruit. Origin: Nicaragua."],
        "fr": ["Rhum vieilli 7 ans (Slow Aged), corsé, notes de chocolat et de fruits secs. Origine: Nicaragua."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": florDeCanaImage
    },
    {
      "id": "r6",
      "name": "Rum al Miele",
      "ingredients": {
        "it": ["Liquore al Rum (Ron Miel), dolce, tradizionale delle Isole Canarie, con miele naturale. Origine: Spagna."],
        "en": ["Rum Liqueur (Ron Miel), sweet, traditional to the Canary Islands, with natural honey. Origin: Spain."],
        "fr": ["Liqueur de Rhum (Ron Miel), douce, traditionnelle des Îles Canaries, avec du miel naturel. Origine: Espagne."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": ronMieleImage
    },
    {
      "id": "r7",
      "name": "Zacapa 23 Anni",
      "ingredients": {
        "it": ["Rum invecchiato (Solera Gran Reserva), complesso, note di miele, spezie e cioccolato. Origine: Guatemala."],
        "en": ["Aged Rum (Solera Gran Reserva), complex, notes of honey, spices, and chocolate. Origin: Guatemala."],
        "fr": ["Rhum vieilli (Solera Gran Reserva), complexe, notes de miel, épices et chocolat. Origine: Guatemala."]
      },
      "price": {
        "it": ["€14,00"],
        "en": ["€14,00"],
        "fr": ["€14,00"]
      },
      "image": zacapaImage
    },
    {
      "id": "r8",
      "name": "Diplomático",
      "ingredients": {
        "it": ["Rum premium (Dark Rum), ricco, con note di sciroppo d'acero, liquirizia e caramello. Origine: Venezuela."],
        "en": ["Premium Rum (Dark Rum), rich, with notes of maple syrup, licorice, and caramel. Origin: Venezuela."],
        "fr": ["Rhum premium (Dark Rum), riche, avec des notes de sirop d'érable, réglisse et caramel. Origine: Venezuela."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": diplomaticoImage
    }
  ],
  whisky: [
    {
      "id": "w1",
      "name": "J&B",
      "ingredients": {
        "it": ["Blended Scotch Whisky, leggero e agrumato, ideale per cocktail. Origine: Scozia."],
        "en": ["Blended Scotch Whisky, light and citrusy, ideal for cocktails. Origin: Scotland."],
        "fr": ["Whisky Blended Scotch, léger et agrumé, idéal pour les cocktails. Origine: Écosse."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": "jAndBImage"
    },
    {
      "id": "w2",
      "name": "Jameson",
      "ingredients": {
        "it": ["Blended Irish Whiskey, tripla distillazione, morbido, con note di vaniglia, nocciola e spezie. Origine: Irlanda."],
        "en": ["Blended Irish Whiskey, triple distilled, smooth, with notes of vanilla, hazelnut, and spice. Origin: Ireland."],
        "fr": ["Blended Irish Whiskey, triple distillation, doux, avec des notes de vanille, noisette et épices. Origine: Irlande."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": "jamesonStandardImage"
    },
    {
      "id": "w3",
      "name": "Jameson Barrel",
      "ingredients": {
        "it": ["Whiskey Irlandese (Double Cask), ricco, con note di caramello, toffee e spezie."],
        "en": ["Irish Whiskey (Double Cask), rich, with notes of caramel, toffee, and spice."],
        "fr": ["Whiskey Irlandais (Double Cask), riche, avec des notes de caramel, toffee et épices."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": "barrelWhiskeyImage"
    },
    {
      "id": "w4",
      "name": "Talisker",
      "ingredients": {
        "it": ["Single Malt Scotch (Skye), marino, pepato e affumicato. Origine: Scozia (Isola di Skye)."],
        "en": ["Single Malt Scotch (Skye), maritime, peppery, and smoky. Origin: Scotland (Isle of Skye)."],
        "fr": ["Single Malt Scotch (Skye), marin, poivré et fumé. Origine: Écosse (Île de Skye)."]
      },
      "price": {
        "it": ["€12,00"],
        "en": ["€12,00"],
        "fr": ["€12,00"]
      },
      "image": "taliskerImage"
    },
    {
      "id": "w5",
      "name": "Laphroaig",
      "ingredients": {
        "it": ["Single Malt Scotch (Islay), torbato e affumicato intenso, con note medicinali. Origine: Scozia (Isola di Islay)."],
        "en": ["Single Malt Scotch (Islay), intensely peated and smoky, with medicinal notes. Origin: Scotland (Isle of Islay)."],
        "fr": ["Single Malt Scotch (Islay), fortement tourbé et fumé, avec des notes médicinales. Origine: Écosse (Île d'Islay)."]
      },
      "price": {
        "it": ["€12,00"],
        "en": ["€12,00"],
        "fr": ["€12,00"]
      },
      "image": "laphroaigImage"
    },
    {
      "id": "w6",
      "name": "Jack Daniel's",
      "ingredients": {
        "it": ["Tennessee Whiskey (legge del Lincoln County Process), morbido, vaniglia e rovere tostato. Origine: USA (Tennessee)."],
        "en": ["Tennessee Whiskey (Lincoln County Process), smooth, vanilla, and toasted oak. Origin: USA (Tennessee)."],
        "fr": ["Tennessee Whiskey (procédé du comté de Lincoln), doux, vanille et chêne grillé. Origine: USA (Tennessee)."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": "jackDanielsImage"
    },
    {
      "id": "w7",
      "name": "Jack Daniel's al Miele",
      "ingredients": {
        "it": ["Liquore al Whiskey, mix di Jack Daniel's No. 7 e liquore al miele, dolce e speziato, con sentori floreali. Origine: USA (Tennessee)."],
        "en": ["Whiskey Liqueur, mix of Jack Daniel's No. 7 and honey liqueur, sweet and spicy, with floral notes. Origin: USA (Tennessee)."],
        "fr": ["Liqueur de Whiskey, mélange de Jack Daniel's No. 7 et de liqueur de miel, douce et épicée, avec des notes florales. Origine: USA (Tennessee)."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": "jackDanielsHoneyImage"
    },
    {
      "id": "w8",
      "name": "Red Label",
      "ingredients": {
        "it": ["Blended Scotch Whisky, vivace, speziato e affumicato leggero. Origine: Scozia."],
        "en": ["Blended Scotch Whisky, vibrant, spicy, and lightly smoky. Origin: Scotland."],
        "fr": ["Whisky Blended Scotch, vif, épicé et légèrement fumé. Origine: Écosse."]
      },
      "price": {
        "it": ["€9,00"],
        "en": ["€9,00"],
        "fr": ["€9,00"]
      },
      "image": "redLabelImage"
    },
    {
      "id": "w9",
      "name": "Glen Grant",
      "ingredients": {
        "it": ["Single Malt Scotch (Speyside), leggero, fruttato e delicato. Origine: Scozia (Speyside)."],
        "en": ["Single Malt Scotch (Speyside), light, fruity, and delicate. Origin: Scotland (Speyside)."],
        "fr": ["Single Malt Scotch (Speyside), léger, fruité et délicat. Origine: Écosse (Speyside)."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": "glenGrantImage"
    },
    {
      "id": "w10",
      "name": "Tullamore",
      "ingredients": {
        "it": ["Blended Irish Whiskey, tripla distillazione, morbido, fruttato e vanigliato. Origine: Irlanda."],
        "en": ["Blended Irish Whiskey, triple distilled, smooth, fruity, and vanilla notes. Origin: Ireland."],
        "fr": ["Blended Irish Whiskey, triple distillation, doux, fruité et vanillé. Origine: Irlande."]
      },
      "price": {
        "it": ["€8,00"],
        "en": ["€8,00"],
        "fr": ["€8,00"]
      },
      "image": "tullamoreImage"
    },
    {
      "id": "w11",
      "name": "Bulleit Bourbon",
      "ingredients": {
        "it": ["Kentucky Straight Bourbon, alto contenuto di segale, speziato e rovere tostato. Origine: USA (Kentucky)."],
        "en": ["Kentucky Straight Bourbon, high rye content, spicy and toasted oak. Origin: USA (Kentucky)."],
        "fr": ["Kentucky Straight Bourbon, forte teneur en seigle, épicé et chêne grillé. Origine: USA (Kentucky)."]
      },
      "price": {
        "it": ["€10,00"],
        "en": ["€10,00"],
        "fr": ["€10,00"]
      },
      "image": "bulleitBourbonImage"
    },
    {
      "id": "w12",
      "name": "Oban",
      "ingredients": {
        "it": ["Single Malt Scotch (Western Highlands), maltato, marittimo e affumicato. Origine: Scozia (Highlands)."],
        "en": ["Single Malt Scotch (Western Highlands), malty, maritime, and smoky. Origin: Scotland (Highlands)."],
        "fr": ["Single Malt Scotch (Western Highlands), malté, maritime et fumé. Origine: Écosse (Highlands)."]
      },
      "price": {
        "it": ["€14,00"],
        "en": ["€14,00"],
        "fr": ["€14,00"]
      },
      "image": "obanImage"
    }
  ],
  amari: [
    {
      id: "a1",
      name: "Limoncello",
      ingredients: {
        it: ["Liquore al limone, dolce e profumato."],
        en: ["Lemon liqueur, sweet and aromatic."],
        fr: ["Liqueur de citron, douce et parfumée."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "limoncelloImage"
    },
    {
      id: "a2",
      name: "Anima Amara",
      ingredients: {
        it: ["Amaro dal gusto intenso e leggermente amaro."],
        en: ["Bitter liqueur with an intense and slightly bitter taste."],
        fr: ["Amaro au goût intense et légèrement amer."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "animaAmaraImage"
    },
    {
      id: "a3",
      name: "Montenegro",
      ingredients: {
        it: ["Amaro dolce e aromatico, con note speziate."],
        en: ["Sweet and aromatic amaro, with spiced notes."],
        fr: ["Amaro doux et aromatique, avec des notes épicées."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "montenegroImage"
    },
    {
      id: "a4",
      name: "San Simone",
      ingredients: {
        it: ["Amaro classico italiano, equilibrato e aromatico."],
        en: ["Classic Italian amaro, balanced and aromatic."],
        fr: ["Amaro italien classique, équilibré et aromatique."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "sanSimoneImage"
    },
    {
      id: "a5",
      name: "Amaretto Disaronno",
      ingredients: {
        it: ["Liquore alle mandorle, dolce e aromatico."],
        en: ["Almond liqueur, sweet and aromatic."],
        fr: ["Liqueur aux amandes, douce et aromatique."]
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"]
      },
      image: "disaronnoImage"
    },
    {
      id: "a6",
      name: "Jägermeister",
      ingredients: {
        it: ["Liquore alle erbe aromatiche, intenso e speziato."],
        en: ["Herbal liqueur, intense and spiced."],
        fr: ["Liqueur aux herbes, intense et épicée."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "jagermeisterImage"
    },
    {
      id: "a7",
      name: "Sambuca",
      ingredients: {
        it: ["Liquore all'anice, dolce e aromatico."],
        en: ["Anise liqueur, sweet and aromatic."],
        fr: ["Liqueur à l'anis, douce et aromatique."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "sambucaImage"
    },
    {
      id: "a8",
      name: "Baileys",
      ingredients: {
        it: ["Liquore alla crema e whisky, dolce e cremoso."],
        en: ["Cream and whiskey liqueur, sweet and creamy."],
        fr: ["Liqueur crème et whisky, douce et crémeuse."]
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"]
      },
      image: "baileysImage"
    },
    {
      id: "a9",
      name: "Unicum",
      ingredients: {
        it: ["Amaro ungherese a base di erbe, intenso e aromatico."],
        en: ["Hungarian herbal amaro, intense and aromatic."],
        fr: ["Amaro hongrois aux herbes, intense et aromatique."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "unicumImage"
    },
    {
      id: "a10",
      name: "Amaro Lucano",
      ingredients: {
        it: ["Amaro classico italiano, dolce e aromatico."],
        en: ["Classic Italian amaro, sweet and aromatic."],
        fr: ["Amaro italien classique, doux et aromatique."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "amaroLucanoImage"
    },
    {
      id: "a11",
      name: "Cynar",
      ingredients: {
        it: ["Amaro a base di carciofo, amaro e aromatico."],
        en: ["Artichoke-based amaro, bitter and aromatic."],
        fr: ["Amaro à base d’artichaut, amer et aromatique."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "cynarImage"
    },
    {
      id: "a12",
      name: "Amaro Ramazzotti",
      ingredients: {
        it: ["Amaro classico italiano, aromatico e leggermente dolce."],
        en: ["Classic Italian amaro, aromatic and slightly sweet."],
        fr: ["Amaro italien classique, aromatique et légèrement sucré."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "ramazzottiImage"
    },
    {
      id: "a13",
      name: "China Martini",
      ingredients: {
        it: ["Amaro a base di erbe cinesi, aromatico e amarognolo."],
        en: ["Chinese herbal amaro, aromatic and slightly bitter."],
        fr: ["Amaro aux herbes chinoises, aromatique et légèrement amer."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "chinaMartiniImage"
    },
    {
      id: "a14",
      name: "Fernet Branca",
      ingredients: {
        it: ["Amaro intenso e aromatico, a base di erbe e spezie."],
        en: ["Intense and aromatic amaro, made with herbs and spices."],
        fr: ["Amaro intense et aromatique, à base de plantes et épices."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "fernetBrancaImage"
    },
    {
      id: "a15",
      name: "Mirto Zedda Piras",
      ingredients: {
        it: ["Liquore al mirto Sardo, dolce e aromatico."],
        en: ["Sardinian myrtle liqueur, sweet and aromatic."],
        fr: ["Liqueur de myrte Sarde, douce et aromatique."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "mirtoZeddaPirasImage"
    },
    {
      id: "a16",
      name: "Amaro del Capo",
      ingredients: {
        it: ["Amaro Calabrese, aromatico e leggermente dolce."],
        en: ["Calabrian amaro, aromatic and slightly sweet."],
        fr: ["Amaro Calabrais, aromatique et légèrement sucré."]
      },
      price: {
        it: ["€4,00"],
        en: ["€4,00"],
        fr: ["€4,00"]
      },
      image: "amaroDelCapoImage"
    },
    {
      id: "a17",
      name: "Grappa Barricata",
      ingredients: {
        it: ["Grappa invecchiata in botti di legno, aromatica e intensa."],
        en: ["Aged grappa in wooden barrels, aromatic and intense."],
        fr: ["Grappa vieillie en fûts de bois, aromatique et intense."]
      },
      price: {
        it: ["€6,00"],
        en: ["€6,00"],
        fr: ["€6,00"]
      },
      image: "grappaBarricataImage"
    },
    {
      id: "a18",
      name: "Grappa",
      ingredients: {
        it: ["Grappa tradizionale, aromatica e morbida."],
        en: ["Traditional grappa, aromatic and smooth."],
        fr: ["Grappa traditionnelle, aromatique et douce."]
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"]
      },
      image: "grappaImage"
    },
    {
      id: "a19",
      name: "Grappa alla Pera",
      ingredients: {
        it: ["Grappa aromatizzata alla pera, dolce e fruttata."],
        en: ["Pear-flavored grappa, sweet and fruity."],
        fr: ["Grappa aromatisée à la poire, douce et fruitée."]
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"]
      },
      image: "grappaPeraImage"
    },
    {
      id: "a20",
      name: "Genepy Serpillo",
      ingredients: {
        it: ["Liquore alle erbe alpine, aromatico e speziato."],
        en: ["Alpine herb liqueur, aromatic and spiced."],
        fr: ["Liqueur aux herbes alpines, aromatique et épicée."]
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"]
      },
      image: "genepySerpilloImage"
    },
    {
      id: "a21",
      name: "Genziana",
      ingredients: {
        it: ["Liquore alle radici di genziana, amarognolo e aromatico."],
        en: ["Gentian root liqueur, bitter and aromatic."],
        fr: ["Liqueur de racines de gentiane, amère et aromatique."]
      },
      price: {
        it: ["€5,00"],
        en: ["€5,00"],
        fr: ["€5,00"]
      },
      image: "genzianaImage"
    }
  ]
};

export const categoriesMetaAperitif = {
  classici: {
    title: {
      it: "Classici Contemporanei",
      en: "Contemporary Classics",
      fr: "Classiques Contemporains"
    },
    subtitle: {
      it: "Drink equilibrati, colorati e pieni di personalità, perfetti per un momento di aperitivo. Scegli il tuo preferito e brinda con stile",
      en: "Balanced, colorful drinks full of character, perfect for your aperitif moment. Pick your favorite and raise a glass in style.",
      fr: "Des cocktails équilibrés, colorés et pleins de caractère, parfaits pour un moment apéro. Choisis ton préféré et trinque avec style."
    },
    icon: '/icone/classici.png',
    shortTitle: {
      it: 'Classici Contemporanei',
      en: 'Contemporary Classics',
      fr: 'Classiques Contemporains'
    }
  },
  spritz: {
    title: {
      it: "Spritz e Affini",
      en: "Spritz and Similar",
      fr: "Spritz et Similaires"
    },
    subtitle: {
      it: "Freschi, leggeri e pieni di bollicine. Gli spritz e affini sono l'aperitivo perfetto da sorseggiare in compagnia.",
      en: "Fresh, light, and bubbly. Spritz-style drinks made for easy aperitif moments with friends.",
      fr: "Frais, légers et pleins de bulles. Les spritz et boissons similaires, parfaits pour l'apéro entre amis."
    },
    icon: '/icone/vino.png',
    shortTitle: {
      it: 'Spritz e Affini',
      en: 'Spritz & Co.',
      fr: 'Spritz & Co.'
    }
  },
  negroni: {
    title: {
      it: "Negroni e Affini",
      en: "Negroni and Similar",
      fr: "Negroni et Similaires"
    },
    subtitle: {
      it: "Le nostre varianti del celebre cocktail italiano, pensate per l'aperitivo e da gustare senza fretta.",
      en: "Our versions of the iconic Italian cocktail, made to enjoy during aperitif time.",
      fr: "Nos variations du célèbre cocktail italien, à savourer pendant l'apéro."
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Negroni e Affini',
      en: 'Negroni & Co.',
      fr: 'Negroni & Co.'
    }
  },
  analcolici: {
    title: {
      it: "Analcolici",
      en: "Non-Alcoholic",
      fr: "Sans Alcool"
    },
    subtitle: {
      it: "Le nostre proposte analcoliche, fresche e gustose, perfette per l'aperitivo senza alcol.",
      en: "Our alcohol-free creations, fresh and full of flavor, perfect for an easy aperitif.",
      fr: "Nos créations sans alcool, fraîches et savoureuses, parfaites pour un apéro sans alcool."
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici',
      en: 'Non-Alcoholic',
      fr: 'Sans Alcool'
    }
  },
  analcoliciPremium: {
    title: {
      it: "Analcolici Premium",
      en: "Premium Non-Alcoholic",
      fr: "Sans Alcool Premium"
    },
    subtitle: {
      it: "Le nostre versioni analcoliche premium di grandi classici pensate per l'aperitivo.",
      en: "Our premium alcohol-free versions of great classics made for aperitif time.",
      fr: "Nos versions premium sans alcool de grands classiques idéales pour l'apéro."
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici Premium',
      en: 'Premium Non-Alcoholic',
      fr: 'Sans Alcool Premium'
    }
  },
  stagionali: {
    title: {
      it: "Stagionali",
      en: "Seasonal",
      fr: "Saisonniers"
    },
    subtitle: {
      it: "Le nostre proposte stagionali, create con ingredienti del momento e pensate per l'aperitivo.",
      en: "Our seasonal drinks, crafted with fresh ingredients and made for aperitif time.",
      fr: "Nos créations de saison, élaborées avec des ingrédients du moment, parfaites pour l'apéro."
    },
    icon: '/icone/stagionali.png',
    shortTitle: {
      it: 'Stagionali',
      en: 'Seasonal',
      fr: 'Saisonniers'
    }
  },
  vini: {
    title: {
      it: "Vini",
      en: "Wines",
      fr: "Vins"
    },
    subtitle: {
      it: "La nostra selezione di vini bianchi, rossi e rosè perfetta da gustare da sola o durante l'aperitivo in compagnia.",
      en: "Our selection of white, red, and rosé wines, perfect to enjoy on their own or during an aperitif with friends.",
      fr: "Notre sélection de vins blancs, rouges et rosés, idéale à déguster seule ou pendant l'apéro entre amis."
    },
    icon: '/icone/vino.png',
    shortTitle: {
      it: 'Vini',
      en: 'Wines',
      fr: 'Vins'
    }
  },
  birreSpina: {
    title: {
      it: "Alla Spina",
      en: "Draft Beers",
      fr: "Bières Pression"
    },
    subtitle: {
      it: "Le nostre birre alla spina, selezionate per freschezza e gusto, perfette per accompagnare l'aperitivo con gli amici.",
      en: "Our draft beers, chosen for freshness and flavor, perfect to enjoy with friends during aperitif time.",
      fr: "Nos bières pression, sélectionnées pour leur fraîcheur et leur goût, parfaites pour accompagner l'apéro entre amis."
    },
    icon: '/icone/birrespina.png',
    shortTitle: {
      it: 'Alla Spina',
      en: 'Draft Beers',
      fr: 'Bières Pression'
    }
  },
  birreBott: {
    title: {
      it: "Bottiglie",
      en: "Bottles",
      fr: "Bouteilles"
    },
    subtitle: {
      it: "Le nostre birre in bottiglia, da sorseggiare fredde e condividere con gli amici durante l'aperitivo.",
      en: "Our bottled beers, best enjoyed cold and shared with friends during aperitif time.",
      fr: "Nos bières en bouteille, à déguster bien fraîches et à partager entre amis pendant l'apéro."
    },
    icon: '/icone/birrebottiglia.png',
    shortTitle: {
      it: 'Bottiglie',
      en: 'Bottles',
      fr: 'Bouteilles'
    }
  },
  bibite: {
    title: {
      it: "Bibite",
      en: "Cans",
      fr: "Boissons"
    },
    subtitle: {
      it: "Bibite leggere e dissetanti, ideali per rinfrescarti e accompagnare l’aperitivo in ogni momento.",
      en: "Light and refreshing soft drinks, perfect to cool off and enjoy with aperitivo anytime.",
      fr: "Boissons légères et désaltérantes, parfaites pour se rafraîchir et accompagner l’apéro à tout moment."
    },
    icon: '/icone/lattine.png',
    shortTitle: {
      it: 'Bibite',
      en: 'Cans',
      fr: 'Boissons'
    }
  },
};
export const categoriesMetaNight = {
  classici: {
    title: {
      it: "Classici Contemporanei",
      en: "Contemporary Classics",
      fr: "Classiques Contemporains"
    },
    subtitle: {
      it: "Cocktail intramontabili da gustare in ogni serata, perfetti per chi ama i grandi classici",
      en: "Timeless cocktails to enjoy any evening, perfect for those who love the classics",
      fr: "Cocktails intemporels à savourer en soirée, parfaits pour les amateurs de classiques"
    },
    icon: '/icone/classici.png',
    shortTitle: {
      it: 'Classici',
      en: 'Classics',
      fr: 'Classiques'
    }
  },
  pestati: {
    title: {
      it: "Pestati",
      en: "Muddled Drinks",
      fr: "Cocktails Pilés"
    },
    subtitle: {
      it: "Drink freschi con frutta pestata, ideali da assaporare durante la serata con amici",
      en: "Fresh fruit drinks, ideal to savor during the evening with friends",
      fr: "Boissons fraîches aux fruits pilés, idéales à déguster en soirée entre amis"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Pestati',
      en: 'Muddled',
      fr: 'Pilés'
    }
  },
  icedTea: {
    title: {
      it: "Iced Tea",
      en: "Iced Tea",
      fr: "Thé Glacé"
    },
    subtitle: {
      it: "Cocktail a base di Iced Tea, leggeri e frizzanti, perfetti per accompagnare la serata",
      en: "Iced Tea based cocktails, light and refreshing, perfect for enjoying during the evening",
      fr: "Cocktails à base de Thé Glacé, légers et pétillants, parfaits pour accompagner la soirée"
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Iced Tea',
      en: 'Iced Tea',
      fr: 'Thé Glacé'
    }
  },
  sexy: {
    title: {
      it: "Sexy Drink",
      en: "Sexy Drink",
      fr: "Sexy Drink"
    },
    subtitle: {
      it: "Mix vivaci e colorati, pensati per rendere la tua serata più speciale e divertente",
      en: "Vibrant and colorful mixes, designed to make your evening more fun and special",
      fr: "Mélanges vifs et colorés, pensés pour rendre votre soirée plus amusante et spéciale"
    },
    icon: '/icone/sexydrinks.png',
    shortTitle: {
      it: 'Sexy Drink',
      en: 'Sexy Drink',
      fr: 'Sexy Drink'
    }
  },
  analcolici: {
    title: {
      it: "Analcolici",
      en: "Non-Alcoholic",
      fr: "Sans Alcool"
    },
    subtitle: {
      it: "Proposte fresche e leggere senza alcool, perfette per chi vuole godersi la serata senza esagerare",
      en: "Fresh and light non-alcoholic options, perfect for enjoying the evening without overdoing it",
      fr: "Propositions fraîches et légères sans alcool, parfaites pour profiter de la soirée sans excès"
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici',
      en: 'No-Alcohol',
      fr: 'Sans Alcool'
    }
  },
  analcoliciPremium: {
    title: {
      it: "Analcolici Premium",
      en: "Premium Non-Alcoholic",
      fr: "Sans Alcool Premium"
    },
    subtitle: {
      it: "Versioni classiche dei drink più famosi, senza alcool ma con tutto il gusto, ideali per la serata",
      en: "Classic versions of the most famous drinks, alcohol-free but full of flavor, perfect for the evening",
      fr: "Versions classiques des boissons les plus célèbres, sans alcool mais pleines de saveur, idéales pour la soirée"
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici Premium',
      en: 'Premium Non-Alcoholic',
      fr: 'Sans Alcool Premium'
    }
  },
  stagionali: {
    title: {
      it: "Stagionali",
      en: "Seasonal",
      fr: "Saisonniers"
    },
    subtitle: {
      it: "Drink creativi con ingredienti del momento, pensati per sorprendere e rendere la serata unica",
      en: "Creative drinks with seasonal ingredients, designed to surprise and make the evening special",
      fr: "Boissons créatives avec ingrédients de saison, pensées pour surprendre et rendre la soirée unique"
    },
    icon: '/icone/stagionali.png',
    shortTitle: {
      it: 'Stagionali',
      en: 'Seasonal',
      fr: 'Saisonniers'
    }
  },
  vini: {
    title: {
      it: "Vini",
      en: "Wines",
      fr: "Vins"
    },
    subtitle: {
      it: "Selezione di rossi, bianchi e rosè, perfetti da gustare a cena o in compagnia",
      en: "Selection of reds, whites, and rosè wines, perfect to enjoy at dinner or with company",
      fr: "Sélection de vins rouges, blancs et rosè, parfaits à déguster au dîner ou entre amis"
    },
    icon: '/icone/vino.png',
    shortTitle: {
      it: 'Vini',
      en: 'Wines',
      fr: 'Vins'
    }
  },
  birreSpina: {
    title: {
      it: "Alla Spina",
      en: "Draft Beers",
      fr: "Bières Pression"
    },
    subtitle: {
      it: "Birre alla spina fresche e dissetanti, ideali da sorseggiare durante la serata",
      en: "Fresh and refreshing draft beers, ideal to sip throughout the evening",
      fr: "Bières pression fraîches et désaltérantes, idéales à déguster pendant la soirée"
    },
    icon: '/icone/birrespina.png',
    shortTitle: {
      it: 'Alla Spina',
      en: 'Draft Beers',
      fr: 'Bières Pression'
    }
  },
  birreBott: {
    title: {
      it: "Bottiglie",
      en: "Bottles",
      fr: "Bouteilles"
    },
    subtitle: {
      it: "Birre in bottiglia, nazionali e internazionali, da gustare fredde in ogni momento della serata",
      en: "Bottled beers, national and international, best enjoyed cold at any moment of the evening",
      fr: "Bières en bouteille, nationales et internationales, à déguster fraîches à tout moment de la soirée"
    },
    icon: '/icone/birrebottiglia.png',
    shortTitle: {
      it: 'Bottiglie',
      en: 'Bottles',
      fr: 'Bouteilles'
    }
  },
  bibite: {
    title: {
      it: "Bibite",
      en: "Cans",
      fr: "Boissons"
    },
    subtitle: {
      it: "Bibite leggere e dissetanti, perfette per rinfrescarsi e accompagnare ogni momento della serata",
      en: "Light and refreshing drinks, perfect to cool off and enjoy throughout the evening",
      fr: "Boissons légères et désaltérantes, parfaites pour se rafraîchir et accompagner tous les moments de la soirée"
    },
    icon: '/icone/lattine.png',
    shortTitle: {
      it: 'Bibite',
      en: 'Cans',
      fr: 'Boissons'
    }
  },
  gin: {
    title: {
      it: "Gin",
      en: "Gin",
      fr: "Gin"
    },
    subtitle: {
      it: "Tutti i nostri gin, da gustare puri o miscelati in cocktail unici per la serata",
      en: "All our gins, to enjoy neat or in unique cocktails for the evening",
      fr: "Tous nos gins, à déguster purs ou en cocktails uniques pour la soirée"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Gin',
      en: 'Gin',
      fr: 'Gin'
    }
  },
  rum: {
    title: {
      it: "Rum",
      en: "Rum",
      fr: "Rhum"
    },
    subtitle: {
      it: "Tutti i nostri rum, perfetti da sorseggiare o in miscele creative durante la serata",
      en: "All our rums, perfect to sip neat or in creative mixes during the evening",
      fr: "Tous nos rhums, parfaits à déguster purs ou en mélanges créatifs pendant la soirée"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Rum',
      en: 'Rum',
      fr: 'Rhum'
    }
  },
  whisky: {
    title: {
      it: "Whisky",
      en: "Whiskey",
      fr: "Whisky"
    },
    subtitle: {
      it: "Tutti i nostri whisky, da assaporare lentamente e godersi con calma durante la serata",
      en: "All our whiskeys, best savored slowly and enjoyed throughout the evening",
      fr: "Tous nos whiskies, à savourer lentement et à apprécier pendant la soirée"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Whisky',
      en: 'Whiskey',
      fr: 'Whisky'
    }
  },
  amari: {
    title: {
      it: "Digestivi e Affini",
      en: "Digestifs and Similar",
      fr: "Digestifs et Similaires"
    },
    subtitle: {
      it: "Digestivi e affini, ideali per chiudere la serata con gusto e stile",
      en: "Digestifs and similar drinks, perfect to end the evening in style and flavor",
      fr: "Digestifs et similaires, idéaux pour finir la soirée avec goût et style"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Digestivi & Co.',
      en: 'Digestifs & Co.',
      fr: 'Digestifs & Co.'
    }
  },
};

export const categoriesMetaAperitifHot = {
  classici: {
    title: {
      it: "Classici Contemporanei",
      en: "Contemporary Classics",
      fr: "Classiques Contemporains"
    },
    subtitle: {
      it: "Drink equilibrati, colorati e pieni di personalità, perfetti per un momento di aperitivo. Scegli il tuo preferito e brinda con stile",
      en: "Balanced, colorful drinks full of character, perfect for your aperitif moment. Pick your favorite and raise a glass in style.",
      fr: "Des cocktails équilibrés, colorés et pleins de caractère, parfaits pour un moment apéro. Choisis ton préféré et trinque avec style."
    },
    icon: '/icone/classici.png',
    shortTitle: {
      it: 'Classici Contemporanei',
      en: 'Contemporary Classics',
      fr: 'Classiques Contemporains'
    }
  },
  spritz: {
    title: {
      it: "Spritz e Affini",
      en: "Spritz and Similar",
      fr: "Spritz et Similaires"
    },
    subtitle: {
      it: "Freschi, leggeri e pieni di bollicine. Gli spritz e affini sono l'aperitivo perfetto da sorseggiare in compagnia.",
      en: "Fresh, light, and bubbly. Spritz-style drinks made for easy aperitif moments with friends.",
      fr: "Frais, légers et pleins de bulles. Les spritz et boissons similaires, parfaits pour l'apéro entre amis."
    },
    icon: '/icone/vino.png',
    shortTitle: {
      it: 'Spritz e Affini',
      en: 'Spritz & Co.',
      fr: 'Spritz & Co.'
    }
  },
  negroni: {
    title: {
      it: "Negroni e Affini",
      en: "Negroni and Similar",
      fr: "Negroni et Similaires"
    },
    subtitle: {
      it: "Le nostre varianti del celebre cocktail italiano, pensate per l'aperitivo e da gustare senza fretta.",
      en: "Our versions of the iconic Italian cocktail, made to enjoy during aperitif time.",
      fr: "Nos variations du célèbre cocktail italien, à savourer pendant l'apéro."
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Negroni e Affini',
      en: 'Negroni & Co.',
      fr: 'Negroni & Co.'
    }
  },
  analcolici: {
    title: {
      it: "Analcolici",
      en: "Non-Alcoholic",
      fr: "Sans Alcool"
    },
    subtitle: {
      it: "Le nostre proposte analcoliche, fresche e gustose, perfette per l'aperitivo senza alcol.",
      en: "Our alcohol-free creations, fresh and full of flavor, perfect for an easy aperitif.",
      fr: "Nos créations sans alcool, fraîches et savoureuses, parfaites pour un apéro sans alcool."
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici',
      en: 'Non-Alcoholic',
      fr: 'Sans Alcool'
    }
  },
  analcoliciPremium: {
    title: {
      it: "Analcolici Premium",
      en: "Premium Non-Alcoholic",
      fr: "Sans Alcool Premium"
    },
    subtitle: {
      it: "Le nostre versioni analcoliche premium di grandi classici pensate per l'aperitivo.",
      en: "Our premium alcohol-free versions of great classics made for aperitif time.",
      fr: "Nos versions premium sans alcool de grands classiques idéales pour l'apéro."
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici Premium',
      en: 'Premium Non-Alcoholic',
      fr: 'Sans Alcool Premium'
    }
  },
  stagionali: {
    title: {
      it: "Stagionali",
      en: "Seasonal",
      fr: "Saisonniers"
    },
    subtitle: {
      it: "Le nostre proposte stagionali, create con ingredienti del momento e pensate per l'aperitivo.",
      en: "Our seasonal drinks, crafted with fresh ingredients and made for aperitif time.",
      fr: "Nos créations de saison, élaborées avec des ingrédients du moment, parfaites pour l'apéro."
    },
    icon: '/icone/stagionali.png',
    shortTitle: {
      it: 'Stagionali',
      en: 'Seasonal',
      fr: 'Saisonniers'
    }
  },
  hotdrink: {
    title: {
      it: "Drink Caldi",
      en: "Hot Drinks",
      fr: "Boissons Chaudes"
    },

    subtitle: {
      "it": "Bevande calde e avvolgenti, perfette per riscaldarti e accompagnare ogni momento di relax.",
      "en": "Warm and comforting drinks, perfect to warm you up and accompany any moment of relaxation.",
      "fr": "Boissons chaudes et enveloppantes, parfaites pour vous réchauffer et accompagner tout moment de détente."
    },
    icon: '/icone/stagionali.png',
    shortTitle: {
      it: "Drink Caldi",
      en: "Hot Drinks",
      fr: "Boissons Chaudes"
    }
  },
  vini: {
    title: {
      it: "Vini",
      en: "Wines",
      fr: "Vins"
    },
    subtitle: {
      it: "La nostra selezione di vini bianchi, rossi e rosè perfetta da gustare da sola o durante l'aperitivo in compagnia.",
      en: "Our selection of white, red, and rosé wines, perfect to enjoy on their own or during an aperitif with friends.",
      fr: "Notre sélection de vins blancs, rouges et rosés, idéale à déguster seule ou pendant l'apéro entre amis."
    },
    icon: '/icone/vino.png',
    shortTitle: {
      it: 'Vini',
      en: 'Wines',
      fr: 'Vins'
    }
  },
  birreSpina: {
    title: {
      it: "Alla Spina",
      en: "Draft Beers",
      fr: "Bières Pression"
    },
    subtitle: {
      it: "Le nostre birre alla spina, selezionate per freschezza e gusto, perfette per accompagnare l'aperitivo con gli amici.",
      en: "Our draft beers, chosen for freshness and flavor, perfect to enjoy with friends during aperitif time.",
      fr: "Nos bières pression, sélectionnées pour leur fraîcheur et leur goût, parfaites pour accompagner l'apéro entre amis."
    },
    icon: '/icone/birrespina.png',
    shortTitle: {
      it: 'Alla Spina',
      en: 'Draft Beers',
      fr: 'Bières Pression'
    }
  },
  birreBott: {
    title: {
      it: "Bottiglie",
      en: "Bottles",
      fr: "Bouteilles"
    },
    subtitle: {
      it: "Le nostre birre in bottiglia, da sorseggiare fredde e condividere con gli amici durante l'aperitivo.",
      en: "Our bottled beers, best enjoyed cold and shared with friends during aperitif time.",
      fr: "Nos bières en bouteille, à déguster bien fraîches et à partager entre amis pendant l'apéro."
    },
    icon: '/icone/birrebottiglia.png',
    shortTitle: {
      it: 'Bottiglie',
      en: 'Bottles',
      fr: 'Bouteilles'
    }
  },
  bibite: {
    title: {
      it: "Bibite",
      en: "Cans",
      fr: "Boissons"
    },
    subtitle: {
      it: "Bibite leggere e dissetanti, ideali per rinfrescarti e accompagnare l’aperitivo in ogni momento.",
      en: "Light and refreshing soft drinks, perfect to cool off and enjoy with aperitivo anytime.",
      fr: "Boissons légères et désaltérantes, parfaites pour se rafraîchir et accompagner l’apéro à tout moment."
    },
    icon: '/icone/lattine.png',
    shortTitle: {
      it: 'Bibite',
      en: 'Cans',
      fr: 'Boissons'
    }
  },
};
export const categoriesMetaNightHot = {
  classici: {
    title: {
      it: "Classici Contemporanei",
      en: "Contemporary Classics",
      fr: "Classiques Contemporains"
    },
    subtitle: {
      it: "Cocktail intramontabili da gustare in ogni serata, perfetti per chi ama i grandi classici",
      en: "Timeless cocktails to enjoy any evening, perfect for those who love the classics",
      fr: "Cocktails intemporels à savourer en soirée, parfaits pour les amateurs de classiques"
    },
    icon: '/icone/classici.png',
    shortTitle: {
      it: 'Classici',
      en: 'Classics',
      fr: 'Classiques'
    }
  },
  pestati: {
    title: {
      it: "Pestati",
      en: "Muddled Drinks",
      fr: "Cocktails Pilés"
    },
    subtitle: {
      it: "Drink freschi con frutta pestata, ideali da assaporare durante la serata con amici",
      en: "Fresh fruit drinks, ideal to savor during the evening with friends",
      fr: "Boissons fraîches aux fruits pilés, idéales à déguster en soirée entre amis"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Pestati',
      en: 'Muddled',
      fr: 'Pilés'
    }
  },
  icedTea: {
    title: {
      it: "Iced Tea",
      en: "Iced Tea",
      fr: "Thé Glacé"
    },
    subtitle: {
      it: "Cocktail a base di Iced Tea, leggeri e frizzanti, perfetti per accompagnare la serata",
      en: "Iced Tea based cocktails, light and refreshing, perfect for enjoying during the evening",
      fr: "Cocktails à base de Thé Glacé, légers et pétillants, parfaits pour accompagner la soirée"
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Iced Tea',
      en: 'Iced Tea',
      fr: 'Thé Glacé'
    }
  },
  sexy: {
    title: {
      it: "Sexy Drink",
      en: "Sexy Drink",
      fr: "Sexy Drink"
    },
    subtitle: {
      it: "Mix vivaci e colorati, pensati per rendere la tua serata più speciale e divertente",
      en: "Vibrant and colorful mixes, designed to make your evening more fun and special",
      fr: "Mélanges vifs et colorés, pensés pour rendre votre soirée plus amusante et spéciale"
    },
    icon: '/icone/sexydrinks.png',
    shortTitle: {
      it: 'Sexy Drink',
      en: 'Sexy Drink',
      fr: 'Sexy Drink'
    }
  },
  analcolici: {
    title: {
      it: "Analcolici",
      en: "Non-Alcoholic",
      fr: "Sans Alcool"
    },
    subtitle: {
      it: "Proposte fresche e leggere senza alcool, perfette per chi vuole godersi la serata senza esagerare",
      en: "Fresh and light non-alcoholic options, perfect for enjoying the evening without overdoing it",
      fr: "Propositions fraîches et légères sans alcool, parfaites pour profiter de la soirée sans excès"
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici',
      en: 'No-Alcohol',
      fr: 'Sans Alcool'
    }
  },
  analcoliciPremium: {
    title: {
      it: "Analcolici Premium",
      en: "Premium Non-Alcoholic",
      fr: "Sans Alcool Premium"
    },
    subtitle: {
      it: "Versioni classiche dei drink più famosi, senza alcool ma con tutto il gusto, ideali per la serata",
      en: "Classic versions of the most famous drinks, alcohol-free but full of flavor, perfect for the evening",
      fr: "Versions classiques des boissons les plus célèbres, sans alcool mais pleines de saveur, idéales pour la soirée"
    },
    icon: '/icone/analcolici.png',
    shortTitle: {
      it: 'Analcolici Premium',
      en: 'Premium Non-Alcoholic',
      fr: 'Sans Alcool Premium'
    }
  },
  stagionali: {
    title: {
      it: "Stagionali",
      en: "Seasonal",
      fr: "Saisonniers"
    },
    subtitle: {
      it: "Drink creativi con ingredienti del momento, pensati per sorprendere e rendere la serata unica",
      en: "Creative drinks with seasonal ingredients, designed to surprise and make the evening special",
      fr: "Boissons créatives avec ingrédients de saison, pensées pour surprendre et rendre la soirée unique"
    },
    icon: '/icone/stagionali.png',
    shortTitle: {
      it: 'Stagionali',
      en: 'Seasonal',
      fr: 'Saisonniers'
    }
  },
  hotdrink: {
    title: {
      it: "Drink Caldi",
      en: "Hot Drinks",
      fr: "Boissons Chaudes"
    },

    subtitle: {
      "it": "Bevande calde e avvolgenti, perfette per riscaldarti e accompagnare ogni momento di relax.",
      "en": "Warm and comforting drinks, perfect to warm you up and accompany any moment of relaxation.",
      "fr": "Boissons chaudes et enveloppantes, parfaites pour vous réchauffer et accompagner tout moment de détente."
    },
    icon: '/icone/stagionali.png',
    shortTitle: {
      it: "Drink Caldi",
      en: "Hot Drinks",
      fr: "Boissons Chaudes"
    }
  },
  vini: {
    title: {
      it: "Vini",
      en: "Wines",
      fr: "Vins"
    },
    subtitle: {
      it: "Selezione di rossi, bianchi e rosè, perfetti da gustare a cena o in compagnia",
      en: "Selection of reds, whites, and rosè wines, perfect to enjoy at dinner or with company",
      fr: "Sélection de vins rouges, blancs et rosè, parfaits à déguster au dîner ou entre amis"
    },
    icon: '/icone/vino.png',
    shortTitle: {
      it: 'Vini',
      en: 'Wines',
      fr: 'Vins'
    }
  },
  birreSpina: {
    title: {
      it: "Alla Spina",
      en: "Draft Beers",
      fr: "Bières Pression"
    },
    subtitle: {
      it: "Birre alla spina fresche e dissetanti, ideali da sorseggiare durante la serata",
      en: "Fresh and refreshing draft beers, ideal to sip throughout the evening",
      fr: "Bières pression fraîches et désaltérantes, idéales à déguster pendant la soirée"
    },
    icon: '/icone/birrespina.png',
    shortTitle: {
      it: 'Alla Spina',
      en: 'Draft Beers',
      fr: 'Bières Pression'
    }
  },
  birreBott: {
    title: {
      it: "Bottiglie",
      en: "Bottles",
      fr: "Bouteilles"
    },
    subtitle: {
      it: "Birre in bottiglia, nazionali e internazionali, da gustare fredde in ogni momento della serata",
      en: "Bottled beers, national and international, best enjoyed cold at any moment of the evening",
      fr: "Bières en bouteille, nationales et internationales, à déguster fraîches à tout moment de la soirée"
    },
    icon: '/icone/birrebottiglia.png',
    shortTitle: {
      it: 'Bottiglie',
      en: 'Bottles',
      fr: 'Bouteilles'
    }
  },
  bibite: {
    title: {
      it: "Bibite",
      en: "Cans",
      fr: "Boissons"
    },
    subtitle: {
      it: "Bibite leggere e dissetanti, perfette per rinfrescarsi e accompagnare ogni momento della serata",
      en: "Light and refreshing drinks, perfect to cool off and enjoy throughout the evening",
      fr: "Boissons légères et désaltérantes, parfaites pour se rafraîchir et accompagner tous les moments de la soirée"
    },
    icon: '/icone/lattine.png',
    shortTitle: {
      it: 'Bibite',
      en: 'Cans',
      fr: 'Boissons'
    }
  },
  gin: {
    title: {
      it: "Gin",
      en: "Gin",
      fr: "Gin"
    },
    subtitle: {
      it: "Tutti i nostri gin, da gustare puri o miscelati in cocktail unici per la serata",
      en: "All our gins, to enjoy neat or in unique cocktails for the evening",
      fr: "Tous nos gins, à déguster purs ou en cocktails uniques pour la soirée"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Gin',
      en: 'Gin',
      fr: 'Gin'
    }
  },
  rum: {
    title: {
      it: "Rum",
      en: "Rum",
      fr: "Rhum"
    },
    subtitle: {
      it: "Tutti i nostri rum, perfetti da sorseggiare o in miscele creative durante la serata",
      en: "All our rums, perfect to sip neat or in creative mixes during the evening",
      fr: "Tous nos rhums, parfaits à déguster purs ou en mélanges créatifs pendant la soirée"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Rum',
      en: 'Rum',
      fr: 'Rhum'
    }
  },
  whisky: {
    title: {
      it: "Whisky",
      en: "Whiskey",
      fr: "Whisky"
    },
    subtitle: {
      it: "Tutti i nostri whisky, da assaporare lentamente e godersi con calma durante la serata",
      en: "All our whiskeys, best savored slowly and enjoyed throughout the evening",
      fr: "Tous nos whiskies, à savourer lentement et à apprécier pendant la soirée"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Whisky',
      en: 'Whiskey',
      fr: 'Whisky'
    }
  },
  amari: {
    title: {
      it: "Digestivi e Affini",
      en: "Digestifs and Similar",
      fr: "Digestifs et Similaires"
    },
    subtitle: {
      it: "Digestivi e affini, ideali per chiudere la serata con gusto e stile",
      en: "Digestifs and similar drinks, perfect to end the evening in style and flavor",
      fr: "Digestifs et similaires, idéaux pour finir la soirée avec goût et style"
    },
    icon: '/icone/negroni.png',
    shortTitle: {
      it: 'Digestivi & Co.',
      en: 'Digestifs & Co.',
      fr: 'Digestifs & Co.'
    }
  },
};
