
 {/* Drinks, Special offers, Group menu, The Christmas feast */}
const data = {
    text: {
        starters: {
            key: "starters",
            ru: "закуски",
            en: "starters",
            et: "eelroad",
            fi: "alkuruoat"
        },
        grill: {
            key: "grill",
            ru: "гриль и жареное",
            en: "grill & pan",
            et: "grill & pan", // заменить?
            fi: "grillistä ja pannulta"
        },
        drinks :{
            key: "drinks",
            ru: "Напитки",
            en: "Drinks",
            et: "Joogid",
            fi: "Juomat"
        },
        special: {
            key: "special",
            ru: "Трапеза по-Выборгски",
            en: "Wiipuri Relish",
            et: "Wiipuri Hõrgutis",
            fi: "Wiipurilainen Herkkuateria"
        },
        group: {
            key: "group",
            ru: "Групповое меню",
            en: "Group menu",
            et: "Rühmamenüü",
            fi: "Ryhmämenu"
        },
        feast: {
            key: "feast",
            ru: "Рождественский пир",
            en: "The Christmas feast",
            et: "Jõulusööming",
            fi: "Joulusyöminki"
        },
        menu: {
            key: "menu",
            ru: "Меню",
            en: "Menu",
            et: "Menüü",
            fi: "Menu"
        },
        gallery: {
            key: "gallery",
            ru: "Галерея",
            en: "Gallery",
            et: "Galerii",
            fi: "Galleria"
        }
    },
    starters: {
        pickles: {
            price: "5,0",
            key: "pickles",
            ru: {name: "солёные огурчики Вальсберга", desc: "малосольные огурцы / черемша / сметана / медово-горчичный соус"},
            et: {name: "walsberg'i soolakurgid", desc: "marineeritud karulauk / hapukoor / mee-sinepikaste"},
            fi: {name: "walsberg'in suolakurkku", desc: "karhunlaukkaa / smetanaa / hunaja-sinappikastiketta"},
            en: {name: "walsberg's salted pickles", desc: "ramsons / sour cream / honey-mustard sauce"},
        },
        vorschmack: {
            price: "8,9",
            key: "vorschmack",
            ru: {name: "форшмак", desc: "запечёная свекла / корнишоны / сметана"},
            et: {name: "vorschmack", desc: "peedikreem / cornichonid / toorjuustuvaht"},
            fi: {name: "vorschmack", desc: "punajuurikermaa / suolakurkkua / tuorejuustovaahtoa"},
            en: {name: "vorschmack", desc: "beetroot cream / gherkins / cream cheese foam"},
        },
        vege : {
            price: "8,9",
            key: "vege",
            ru: {name: "овощи на гриле", desc: "маринованные овощи / сыр брынза / запечённая свекла"},
            et: {name: "vege", desc: "marineeritud köögiviljad / brõnsa juust / peedikreem"},
            fi: {name: "vege", desc: "marinoituja vihanneksia / bryndza-juustoa / punajuurikermaa"},
            en: {name: "vege", desc: "marinated vegetables / bryndza cheese / beetroot cream"},
        },
        caviar: {
            price: "9,8",
            key: "caviar",
            ru: {name: "икра и салат с грибами", desc: "красная икра / лесные грибы / сметана / лук / сухарики"},
            et: {name: "kalamari ja metsaseenesalat", desc: "sibul / hapukoor / röstsai"},
            fi: {name: "mäti ja metsäsienisalaatti", desc: "sipulia / smetanaa / paahtoleipää"},
            en: {name: "red caviar and mushroom salad", desc: "onion / sour cream / toast bread"},
        },
        seaselection: {
            price: "16,9",
            key: "seafood",
            ru: {name: "ассорти из морепродуктов", desc: "(хватает на двоих) солёный лосось / соус из тунца / копчёная селёдка / икра форели / икра сельди"},
            et: {name: "mereannivalik", desc: "(jätkub ka kahele) soolalõhe / tuunikalakreem / suitsuheeringas / forellimari / herringamari"},
            fi: {name: "merenantimia", desc: "(riittää kahdelle) graavilohta / tonnikalakastiketta / savusilliä / taimenenmätiä / sillimätiä"},
            en: {name: "seafood selection", desc: "(enough for two) salted salmon / tuna cream / smoked herring / trout roe / herring roe"},
        },
        meatselection: {
            price: "14,6",
            key: "meatselection",
            ru: {name: "мясное ассорти", desc: "(хватает на двоих) говяжий язык / копченая утка / мясной паштет / сало"},
            et: {name: "lihavalik", desc: "(jätkub ka kahele) veisekeel / pardifilee / lihapatee / soolapekk"},
            fi: {name: "lihavalikoima", desc: "(riittää kahdelle) naudankieltä / ankanrintaa / lihapateeta / suolasilavaa"},
            en: {name: "meat selection", desc: "(enough for two) veal tongue / duck breast / meat pate / salted lard"},
        },
        veal: {
            price: "8,5",
            key: "vealsalad",
            ru: {name: "салат с говядиной", desc: "говяжья вырезка / маринованные овощи / шампиньоны / листья салата"},
            et: {name: "vesiselihasalat", desc: "veise sisefilee / marineeritud köögiviljad / šampinjonid"},
            fi: {name: "naudanlihasalaatti", desc: "naudan sisäfilettä / marinoituja vihanneksia / herkkusieniä"},
            en: {name: "veal salad", desc: "beef tenderloin / marinated vegetables / champignons"},
        },
        caesar: {
            price: "7,9",
            key: "caesar",
            ru: {name: "цезарь по-выборгски", desc: "куриное филе / жареные лисички / лук порей / пармезан / хлебная крошка / соус цезарь"},
            et: {name: "caesar a'la wiipuri", desc: "kanafilee / kukeseened / parmesan / krutoonid"},
            fi: {name: "caesar a'la wiipuri", desc: "kanafilettä / kantarelleja / parmesaanijuustoa / krutonkeja"},
            en: {name: "caesar a'la wiipuri", desc: "chicken fillet / chanterelles / parmesan / croutons"},
        },
        tartar: {
            price: "13,9",
            key: "tartar",
            ru: {name: "тартар из говядины", desc: "филе говядины / солёные огурцы / лук / анчоусы / тосты / острый соус"},
            et: {name: "böff a'la tartar", desc: "sibul / soolakurk / anšoovis / röstsai / terav kaste"},
            fi: {name: "tartarpihvi", desc: "sipulia / suolakurkkua / anjovista / paahtoleipää / terävää kastiketta"}, // check if correct (last 2)
            en: {name: "beef a'la tar-tar", desc: "onion / gherkins / anchovy / toast bread / spicy sauce"},
        },
        herringtrio: {
            price: "8,6",
            key: "trio",
            ru: {name: "трио из селёдки", desc: "копчёная селёдка / парфе из селёдки / икра селёдки"},
            et: {name: "heeringatrio", desc: "suitsuheeringas / heeringaparfee / heeringamari"},
            fi: {name: "sillikolmikko", desc: "savusilliä / silliparfeetta / sillimätiä"},
            en: {name: "herring trio", desc: "smoked herring / herring parfait / herring roe"},
        },
        balticherring: {
            price: "6,5",
            key: "baltic",
            ru: {name: "салака", desc: "маринованный лук / яйцо 62C°"},
            et: {name: "räimed", desc: "marineeritud sibul / muna 62C°"},
            fi: {name: "silakka", desc: "marinoitua sipulia / munaa 62C°"},
            en: {name: "baltic herring", desc: "pickled onion / egg 62C°"},
        }
    },

    grill: {
        steak: {
            price: "22,9",
            key: "steak",
            ru: {name: "говядина по-выборгски", desc: "вырезка на гриле / вок из овощей / картофель с розмарином / винный соус"},
            et: {name: "wiipuri biifsteek", desc: "veise sisefilee / veinikaste / rosmariinikartul"},
            fi: {name: "wiipurilainen pihvi", desc: "naudan sisäfilettä / viinikastiketta / rosmariiniperunoita"},
            en: {name: "beefsteak wiipuri style", desc: "beef tenderloin / red wine sauce / rosemary potatoes"},
        },
        cheeks: {
            price: "18,8",
            key: "cheeks",
            ru: {name: "тушёные говяжьи щёки", desc: "тушеные говяжьи щёки / картофельный гратен / вишнёво-винный соус / свежий салат"},
            et: {name: "veisepõsk", desc: "hautatud veise põseliha / veini-kirsikaste / kartuligratään"}, // correct??
            fi: {name: "naudan poski", desc: "haudutettua naudan poskilihaa / viini-kirsikka-kastiketta / perunagratiinia"}, // and here ??
            en: {name: "beef cheek", desc: "braised beef cheek / wine and cherry sauce / potato gratin"},
        },
        duck: {
            price: "16,9",
            key: "duck",
            ru: {name: "утка", desc: "утиная грудка на гриле / малиновый соус / пюре из морковки"},
            et: {name: "part", desc: "grillitud pardirind / vaarikakaste / porgandipüree"},
            fi: {name: "ankka", desc: "grillatua ankanrintaa / vadelmakastiketta / porkkanasosetta"}, 
            en: {name: "duck", desc: "grilled duck breast / raspberry sauce / potato gratin"},
        },
        // newone: {
        //     price: "",
        //     key: "",
        //     ru: {name: "", desc: ""},
        //     et: {name: "", desc: ""},
        //     fi: {name: "", desc: ""}, 
        //     en: {name: "", desc: ""},
        // },
        chicken: {
            price: "14,9",
            key: "chicken",
            ru: {name: "курица", desc: "куриное филе с косточкой / сырно-шпинатный соус / картофельный гратен"},
            et: {name: "kana", desc: "kanafilee supreme / juustu-spinatikaste / kartuligratään"},
            fi: {name: "kana", desc: "supreme kananrintaa / juusto-pinaattikastiketta / perunagratiinia"}, 
            en: {name: "chicken", desc: "chicken fillet supreme / cheese and spinach sauce / potato gratin"},
        },
        pork: {
            price: "15,9",
            key: "pork",
            ru: {name: "свиная мини-рулька", desc: "тушёная мини-рулька / яблочно-горчичный соус / картофельный гратен"},
            et: {name: "sea minikoot", desc: "hautatud seakoot / õuna-sinepikaste / kartuligratään"},
            fi: {name: "porsaanpotkaa", desc: "haudutettua porsanpotkaa / omena-sinappikastiketta / perunagratiinia"}, 
            en: {name: "pork", desc: "braised piglet knuckles / apple and mustard sauce / potato gratin"},
        },
        boar: {
            price: "18,6",
            key: "boar",
            ru: {name: "кабан", desc: "кабан тушёный в тёмном пиве / картофель с розмарином / овощи / свежий салат"},
            et: {name: "metssiga", desc: "tumedas õlles hautatud metssealiha / rosmariinikartul"},
            fi: {name: "villisika", desc: "tummassa oluessa haudutettua villisikaa / rosmariiniperunoita"}, 
            en: {name: "wild boar", desc: "wild boar meat braised in dark beer / rosemary potatoes"},
        },
    }
   

}

export default data

