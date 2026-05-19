

// --- Verb data (FULL SUPER verb set for Present, Past, and Future) ---
const VERB_SETS = {
 
  Present: [
    // SER (to be)
    { en: "I am", es: "soy" }, { en: "I am not", es: "no soy" }, { en: "Am I?", es: "soy?" },
    { en: "You are", es: "eres" }, { en: "You are not", es: "no eres" }, { en: "Are you?", es: "eres?" },
    { en: "He is", es: "es" }, { en: "He is not", es: "no es" }, { en: "Is he?", es: "es?" },
    { en: "She is", es: "es" }, { en: "She is not", es: "no es" }, { en: "Is she?", es: "es?" },
    { en: "We are", es: "somos" }, { en: "We are not", es: "no somos" }, { en: "Are we?", es: "somos?" },
    { en: "They are", es: "son" }, { en: "They are not", es: "no son" }, { en: "Are they?", es: "son?" },

    // TENER (to have)
    { en: "I have", es: "tengo" }, { en: "I do not have", es: "no tengo" }, { en: "Do I have?", es: "tengo?" },
    { en: "You have", es: "tienes" }, { en: "You do not have", es: "no tienes" }, { en: "Do you have?", es: "tienes?" },
    { en: "He has", es: "tiene" }, { en: "He does not have", es: "no tiene" }, { en: "Does he have?", es: "tiene?" },
    { en: "She has", es: "tiene" }, { en: "She does not have", es: "no tiene" }, { en: "Does she have?", es: "tiene?" },
    { en: "We have", es: "tenemos" }, { en: "We do not have", es: "no tenemos" }, { en: "Do we have?", es: "tenemos?" },
    { en: "They have", es: "tienen" }, { en: "They do not have", es: "no tienen" }, { en: "Do they have?", es: "tienen?" },

    // HACER (to do/make)
    { en: "I do", es: "hago" }, { en: "I do not do", es: "no hago" }, { en: "Do I do?", es: "hago?" },
    { en: "You do", es: "haces" }, { en: "You do not do", es: "no haces" }, { en: "Do you do?", es: "haces?" },
    { en: "He does", es: "hace" }, { en: "He does not do", es: "no hace" }, { en: "Does he do?", es: "hace?" },
    { en: "She does", es: "hace" }, { en: "She does not do", es: "no hace" }, { en: "Does she do?", es: "hace?" },
    { en: "We do", es: "hacemos" }, { en: "We do not do", es: "no hacemos" }, { en: "Do we do?", es: "hacemos?" },
    { en: "They do", es: "hacen" }, { en: "They do not do", es: "no hacen" }, { en: "Do they do?", es: "hacen?" },

    // PODER (can/be able to)
    { en: "I can", es: "puedo" }, { en: "I cannot", es: "no puedo" }, { en: "Can I?", es: "puedo?" },
    { en: "You can", es: "puedes" }, { en: "You cannot", es: "no puedes" }, { en: "Can you?", es: "puedes?" },
    { en: "He can", es: "puede" }, { en: "He cannot", es: "no puede" }, { en: "Can he?", es: "puede?" },
    { en: "She can", es: "puede" }, { en: "She cannot", es: "no puede" }, { en: "Can she?", es: "puede?" },
    { en: "We can", es: "podemos" }, { en: "We cannot", es: "no podemos" }, { en: "Can we?", es: "podemos?" },
    { en: "They can", es: "pueden" }, { en: "They cannot", es: "no pueden" }, { en: "Can they?", es: "pueden?" },
  
    // DECIR (to say)
    { en: "I say", es: "digo" }, { en: "I do not say", es: "no digo" }, { en: "Do I say?", es: "digo?" },
    { en: "You say", es: "dices" }, { en: "You do not say", es: "no dices" }, { en: "Do you say?", es: "dices?" },
    { en: "He says", es: "dice" }, { en: "He does not say", es: "no dice" }, { en: "Does he say?", es: "dice?" },
    { en: "She says", es: "dice" }, { en: "She does not say", es: "no dice" }, { en: "Does she say?", es: "dice?" },
    { en: "We say", es: "decimos" }, { en: "We do not say", es: "no decimos" }, { en: "Do we say?", es: "decimos?" },
    { en: "They say", es: "dicen" }, { en: "They do not say", es: "no dicen" }, { en: "Do they say?", es: "dicen?" },

    // IR (to go)
    { en: "I go", es: "voy" }, { en: "I do not go", es: "no voy" }, { en: "Do I go?", es: "voy?" },
    { en: "You go", es: "vas" }, { en: "You do not go", es: "no vas" }, { en: "Do you go?", es: "vas?" },
    { en: "He goes", es: "va" }, { en: "He does not go", es: "no va" }, { en: "Does he go?", es: "va?" },
    { en: "She goes", es: "va" }, { en: "She does not go", es: "no va" }, { en: "Does she go?", es: "va?" },
    { en: "We go", es: "vamos" }, { en: "We do not go", es: "no vamos" }, { en: "Do we go?", es: "vamos?" },
    { en: "They go", es: "van" }, { en: "They do not go", es: "no van" }, { en: "Do they go?", es: "van?" },

    // DAR (to give)
    { en: "I give", es: "doy" }, { en: "I do not give", es: "no doy" }, { en: "Do I give?", es: "doy?" },
    { en: "You give", es: "das" }, { en: "You do not give", es: "no das" }, { en: "Do you give?", es: "das?" },
    { en: "He gives", es: "da" }, { en: "He does not give", es: "no da" }, { en: "Does he give?", es: "da?" },
    { en: "She gives", es: "da" }, { en: "She does not give", es: "no da" }, { en: "Does she give?", es: "da?" },
    { en: "We give", es: "damos" }, { en: "We do not give", es: "no damos" }, { en: "Do we give?", es: "damos?" },
    { en: "They give", es: "dan" }, { en: "They do not give", es: "no dan" }, { en: "Do they give?", es: "dan?" },

    // VER (to see)
    { en: "I see", es: "veo" }, { en: "I do not see", es: "no veo" }, { en: "Do I see?", es: "veo?" },
    { en: "You see", es: "ves" }, { en: "You do not see", es: "no ves" }, { en: "Do you see?", es: "ves?" },
    { en: "He sees", es: "ve" }, { en: "He does not see", es: "no ve" }, { en: "Does he see?", es: "ve?" },
    { en: "She sees", es: "ve" }, { en: "She does not see", es: "no ve" }, { en: "Does she see?", es: "ve?" },
    { en: "We see", es: "vemos" }, { en: "We do not see", es: "no vemos" }, { en: "Do we see?", es: "vemos?" },
    { en: "They see", es: "ven" }, { en: "They do not see", es: "no ven" }, { en: "Do they see?", es: "ven?" },

    // SABER (to know)
    { en: "I know", es: "sé" }, { en: "I do not know", es: "no sé" }, { en: "Do I know?", es: "sé?" },
    { en: "You know", es: "sabes" }, { en: "You do not know", es: "no sabes" }, { en: "Do you know?", es: "sabes?" },
    { en: "He knows", es: "sabe" }, { en: "He does not know", es: "no sabe" }, { en: "Does he know?", es: "sabe?" },
    { en: "She knows", es: "sabe" }, { en: "She does not know", es: "no sabe" }, { en: "Does she know?", es: "sabe?" },
    { en: "We know", es: "sabemos" }, { en: "We do not know", es: "no sabemos" }, { en: "Do we know?", es: "sabemos?" },
    { en: "They know", es: "saben" }, { en: "They do not know", es: "no saben" }, { en: "Do they know?", es: "saben?" },

    // PASAR (to pass/go by)
    { en: "I pass", es: "paso" }, { en: "I do not pass", es: "no paso" }, { en: "Do I pass?", es: "paso?" },
    { en: "You pass", es: "pasas" }, { en: "You do not pass", es: "no pasas" }, { en: "Do you pass?", es: "pasas?" },
    { en: "He passes", es: "pasa" }, { en: "He does not pass", es: "no pasa" }, { en: "Does he pass?", es: "pasa?" },
    { en: "She passes", es: "pasa" }, { en: "She does not pass", es: "no pasa" }, { en: "Does she pass?", es: "pasa?" },
    { en: "We pass", es: "pasamos" }, { en: "We do not pass", es: "no pasamos" }, { en: "Do we pass?", es: "pasamos?" },
    { en: "They pass", es: "pasan" }, { en: "They do not pass", es: "no pasan" }, { en: "Do they pass?", es: "pasan?" },

    // DEBER (must, should, have to)
    { en: "I must", es: "debo" }, { en: "I must not", es: "no debo" }, { en: "Must I?", es: "debo?" },
    { en: "You must", es: "debes" }, { en: "You must not", es: "no debes" }, { en: "Must you?", es: "debes?" },
    { en: "He must", es: "debe" }, { en: "He must not", es: "no debe" }, { en: "Must he?", es: "debe?" },
    { en: "She must", es: "debe" }, { en: "She must not", es: "no debe" }, { en: "Must she?", es: "debe?" },
    { en: "We must", es: "debemos" }, { en: "We must not", es: "no debemos" }, { en: "Must we?", es: "debemos?" },
    { en: "They must", es: "deben" }, { en: "They must not", es: "no deben" }, { en: "Must they?", es: "deben?" },

    // QUERER (to want/love)
    { en: "I want", es: "quiero" }, { en: "I do not want", es: "no quiero" }, { en: "Do I want?", es: "quiero?" },
    { en: "You want", es: "quieres" }, { en: "You do not want", es: "no quieres" }, { en: "Do you want?", es: "quieres?" },
    { en: "He wants", es: "quiere" }, { en: "He does not want", es: "no quiere" }, { en: "Does he want?", es: "quiere?" },
    { en: "She wants", es: "quiere" }, { en: "She does not want", es: "no quiere" }, { en: "Does she want?", es: "quiere?" },
    { en: "We want", es: "queremos" }, { en: "We do not want", es: "no queremos" }, { en: "Do we want?", es: "queremos?" },
    { en: "They want", es: "quieren" }, { en: "They do not want", es: "no quieren" }, { en: "Do they want?", es: "quieren?" },

    // LLEGAR (to arrive)
    { en: "I arrive", es: "llego" }, { en: "I do not arrive", es: "no llego" }, { en: "Do I arrive?", es: "llego?" },
    { en: "You arrive", es: "llegas" }, { en: "You do not arrive", es: "no llegas" }, { en: "Do you arrive?", es: "llegas?" },
    { en: "He arrives", es: "llega" }, { en: "He does not arrive", es: "no llega" }, { en: "Does he arrive?", es: "llega?" },
    { en: "She arrives", es: "llega" }, { en: "She does not arrive", es: "no llega" }, { en: "Does she arrive?", es: "llega?" },
    { en: "We arrive", es: "llegamos" }, { en: "We do not arrive", es: "no llegamos" }, { en: "Do we arrive?", es: "llegamos?" },
    { en: "They arrive", es: "llegan" }, { en: "They do not arrive", es: "no llegan" }, { en: "Do they arrive?", es: "llegan?" },

    // DEJAR (to leave)
    { en: "I leave", es: "dejo" }, { en: "I do not leave", es: "no dejo" }, { en: "Do I leave?", es: "dejo?" },
    { en: "You leave", es: "dejas" }, { en: "You do not leave", es: "no dejas" }, { en: "Do you leave?", es: "dejas?" },
    { en: "He leaves", es: "deja" }, { en: "He does not leave", es: "no deja" }, { en: "Does he leave?", es: "deja?" },
    { en: "She leaves", es: "deja" }, { en: "She does not leave", es: "no deja" }, { en: "Does she leave?", es: "deja?" },
    { en: "We leave", es: "dejamos" }, { en: "We do not leave", es: "no dejamos" }, { en: "Do we leave?", es: "dejamos?" },
    { en: "They leave", es: "dejan" }, { en: "They do not leave", es: "no dejan" }, { en: "Do they leave?", es: "dejan?" },

    // LLEVAR (to carry)
    { en: "I carry", es: "llevo" }, { en: "I do not carry", es: "no llevo" }, { en: "Do I carry?", es: "llevo?" },
    { en: "You carry", es: "llevas" }, { en: "You do not carry", es: "no llevas" }, { en: "Do you carry?", es: "llevas?" },
    { en: "He carries", es: "lleva" }, { en: "He does not carry", es: "no lleva" }, { en: "Does he carry?", es: "lleva?" },
    { en: "She carries", es: "lleva" }, { en: "She does not carry", es: "no lleva" }, { en: "Does she carry?", es: "lleva?" },
    { en: "We carry", es: "llevamos" }, { en: "We do not carry", es: "no llevamos" }, { en: "Do we carry?", es: "llevamos?" },
    { en: "They carry", es: "llevan" }, { en: "They do not carry", es: "no llevan" }, { en: "Do they carry?", es: "llevan?" },

    // ENCONTRAR (to find/meet)
    { en: "I find", es: "encuentro" }, { en: "I do not find", es: "no encuentro" }, { en: "Do I find?", es: "encuentro?" },
    { en: "You find", es: "encuentras" }, { en: "You do not find", es: "no encuentras" }, { en: "Do you find?", es: "encuentras?" },
    { en: "He finds", es: "encuentra" }, { en: "He does not find", es: "no encuentra" }, { en: "Does he find?", es: "encuentra?" },
    { en: "She finds", es: "encuentra" }, { en: "She does not find", es: "no encuentra" }, { en: "Does she find?", es: "encuentra?" },
    { en: "We find", es: "encontramos" }, { en: "We do not find", es: "no encontramos" }, { en: "Do we find?", es: "encontramos?" },
    { en: "They find", es: "encuentran" }, { en: "They do not find", es: "no encuentran" }, { en: "Do they find?", es: "encuentran?" }
  ],
   
    Past: [
    // SER (to be)
    { en: "I was", es: "fui" }, { en: "I was not", es: "no fui" }, { en: "Was I?", es: "fui?" },
    { en: "You were", es: "fuiste" }, { en: "You were not", es: "no fuiste" }, { en: "Were you?", es: "fuiste?" },
    { en: "He was", es: "fue" }, { en: "He was not", es: "no fue" }, { en: "Was he?", es: "fue?" },
    { en: "She was", es: "fue" }, { en: "She was not", es: "no fue" }, { en: "Was she?", es: "fue?" },
    { en: "We were", es: "fuimos" }, { en: "We were not", es: "no fuimos" }, { en: "Were we?", es: "fuimos?" },
    { en: "They were", es: "fueron" }, { en: "They were not", es: "no fueron" }, { en: "Were they?", es: "fueron?" },

    // TENER (to have)
    { en: "I had", es: "tuve" }, { en: "I did not have", es: "no tuve" }, { en: "Did I have?", es: "tuve?" },
    { en: "You had", es: "tuviste" }, { en: "You did not have", es: "no tuviste" }, { en: "Did you have?", es: "tuviste?" },
    { en: "He had", es: "tuvo" }, { en: "He did not have", es: "no tuvo" }, { en: "Did he have?", es: "tuvo?" },
    { en: "She had", es: "tuvo" }, { en: "She did not have", es: "no tuvo" }, { en: "Did she have?", es: "tuvo?" },
    { en: "We had", es: "tuvimos" }, { en: "We did not have", es: "no tuvimos" }, { en: "Did we have?", es: "tuvimos?" },
    { en: "They had", es: "tuvieron" }, { en: "They did not have", es: "no tuvieron" }, { en: "Did they have?", es: "tuvieron?" },

    // HACER (to do/make)
    { en: "I did", es: "hice" }, { en: "I did not do", es: "no hice" }, { en: "Did I do?", es: "hice?" },
    { en: "You did", es: "hiciste" }, { en: "You did not do", es: "no hiciste" }, { en: "Did you do?", es: "hiciste?" },
    { en: "He did", es: "hizo" }, { en: "He did not do", es: "no hizo" }, { en: "Did he do?", es: "hizo?" },
    { en: "She did", es: "hizo" }, { en: "She did not do", es: "no hizo" }, { en: "Did she do?", es: "hizo?" },
    { en: "We did", es: "hicimos" }, { en: "We did not do", es: "no hicimos" }, { en: "Did we do?", es: "hicimos?" },
    { en: "They did", es: "hicieron" }, { en: "They did not do", es: "no hicieron" }, { en: "Did they do?", es: "hicieron?" },

    // PODER (could)
    { en: "I could", es: "pude" }, { en: "I could not", es: "no pude" }, { en: "Could I?", es: "pude?" },
    { en: "You could", es: "pudiste" }, { en: "You could not", es: "no pudiste" }, { en: "Could you?", es: "pudiste?" },
    { en: "He could", es: "pudo" }, { en: "He could not", es: "no pudo" }, { en: "Could he?", es: "pudo?" },
    { en: "She could", es: "pudo" }, { en: "She could not", es: "no pudo" }, { en: "Could she?", es: "pudo?" },
    { en: "We could", es: "pudimos" }, { en: "We could not", es: "no pudimos" }, { en: "Could we?", es: "pudimos?" },
    { en: "They could", es: "pudieron" }, { en: "They could not", es: "no pudieron" }, { en: "Could they?", es: "pudieron?" },

    // DECIR (to say)
    { en: "I said", es: "dije" }, { en: "I did not say", es: "no dije" }, { en: "Did I say?", es: "dije?" },
    { en: "You said", es: "dijiste" }, { en: "You did not say", es: "no dijiste" }, { en: "Did you say?", es: "dijiste?" },
    { en: "He said", es: "dijo" }, { en: "He did not say", es: "no dijo" }, { en: "Did he say?", es: "dijo?" },
    { en: "She said", es: "dijo" }, { en: "She did not say", es: "no dijo" }, { en: "Did she say?", es: "dijo?" },
    { en: "We said", es: "dijimos" }, { en: "We did not say", es: "no dijimos" }, { en: "Did we say?", es: "dijimos?" },
    { en: "They said", es: "dijeron" }, { en: "They did not say", es: "no dijeron" }, { en: "Did they say?", es: "dijeron?" },

         // IR (to go)
    { en: "I went", es: "fui" }, { en: "I did not go", es: "no fui" }, { en: "Did I go?", es: "fui?" },
    { en: "You went", es: "fuiste" }, { en: "You did not go", es: "no fuiste" }, { en: "Did you go?", es: "fuiste?" },
    { en: "He went", es: "fue" }, { en: "He did not go", es: "no fue" }, { en: "Did he go?", es: "fue?" },
    { en: "She went", es: "fue" }, { en: "She did not go", es: "no fue" }, { en: "Did she go?", es: "fue?" },
    { en: "We went", es: "fuimos" }, { en: "We did not go", es: "no fuimos" }, { en: "Did we go?", es: "fuimos?" },
    { en: "They went", es: "fueron" }, { en: "They did not go", es: "no fueron" }, { en: "Did they go?", es: "fueron?" },

    // DAR (to give)
    { en: "I gave", es: "di" }, { en: "I did not give", es: "no di" }, { en: "Did I give?", es: "di?" },
    { en: "You gave", es: "diste" }, { en: "You did not give", es: "no diste" }, { en: "Did you give?", es: "diste?" },
    { en: "He gave", es: "dio" }, { en: "He did not give", es: "no dio" }, { en: "Did he give?", es: "dio?" },
    { en: "She gave", es: "dio" }, { en: "She did not give", es: "no dio" }, { en: "Did she give?", es: "dio?" },
    { en: "We gave", es: "dimos" }, { en: "We did not give", es: "no dimos" }, { en: "Did we give?", es: "dimos?" },
    { en: "They gave", es: "dieron" }, { en: "They did not give", es: "no dieron" }, { en: "Did they give?", es: "dieron?" },

    // VER (to see)
    { en: "I saw", es: "vi" }, { en: "I did not see", es: "no vi" }, { en: "Did I see?", es: "vi?" },
    { en: "You saw", es: "viste" }, { en: "You did not see", es: "no viste" }, { en: "Did you see?", es: "viste?" },
    { en: "He saw", es: "vio" }, { en: "He did not see", es: "no vio" }, { en: "Did he see?", es: "vio?" },
    { en: "She saw", es: "vio" }, { en: "She did not see", es: "no vio" }, { en: "Did she see?", es: "vio?" },
    { en: "We saw", es: "vimos" }, { en: "We did not see", es: "no vimos" }, { en: "Did we see?", es: "vimos?" },
    { en: "They saw", es: "vieron" }, { en: "They did not see", es: "no vieron" }, { en: "Did they see?", es: "vieron?" },

    // SABER (to know)
    { en: "I knew", es: "supe" }, { en: "I did not know", es: "no supe" }, { en: "Did I know?", es: "supe?" },
    { en: "You knew", es: "supiste" }, { en: "You did not know", es: "no supiste" }, { en: "Did you know?", es: "supiste?" },
    { en: "He knew", es: "supo" }, { en: "He did not know", es: "no supo" }, { en: "Did he know?", es: "supo?" },
    { en: "She knew", es: "supo" }, { en: "She did not know", es: "no supo" }, { en: "Did she know?", es: "supo?" },
    { en: "We knew", es: "supimos" }, { en: "We did not know", es: "no supimos" }, { en: "Did we know?", es: "supimos?" },
    { en: "They knew", es: "supieron" }, { en: "They did not know", es: "no supieron" }, { en: "Did they know?", es: "supieron?" },

    // PASAR (to pass)
    { en: "I passed", es: "pasé" }, { en: "I did not pass", es: "no pasé" }, { en: "Did I pass?", es: "pasé?" },
    { en: "You passed", es: "pasaste" }, { en: "You did not pass", es: "no pasaste" }, { en: "Did you pass?", es: "pasaste?" },
    { en: "He passed", es: "pasó" }, { en: "He did not pass", es: "no pasó" }, { en: "Did he pass?", es: "pasó?" },
    { en: "She passed", es: "pasó" }, { en: "She did not pass", es: "no pasó" }, { en: "Did she pass?", es: "pasó?" },
    { en: "We passed", es: "pasamos" }, { en: "We did not pass", es: "no pasamos" }, { en: "Did we pass?", es: "pasamos?" },
    { en: "They passed", es: "pasaron" }, { en: "They did not pass", es: "no pasaron" }, { en: "Did they pass?", es: "pasaron?" },

    // DEBER (should/must)
    { en: "I had to", es: "debí" }, { en: "I did not have to", es: "no debí" }, { en: "Did I have to?", es: "debí?" },
    { en: "You had to", es: "debiste" }, { en: "You did not have to", es: "no debiste" }, { en: "Did you have to?", es: "debiste?" },
    { en: "He had to", es: "debió" }, { en: "He did not have to", es: "no debió" }, { en: "Did he have to?", es: "debió?" },
    { en: "She had to", es: "debió" }, { en: "She did not have to", es: "no debió" }, { en: "Did she have to?", es: "debió?" },
    { en: "We had to", es: "debimos" }, { en: "We did not have to", es: "no debimos" }, { en: "Did we have to?", es: "debimos?" },
    { en: "They had to", es: "debieron" }, { en: "They did not have to", es: "no debieron" }, { en: "Did they have to?", es: "debieron?" },

    // QUERER (to want)
    { en: "I wanted", es: "quise" }, { en: "I did not want", es: "no quise" }, { en: "Did I want?", es: "quise?" },
    { en: "You wanted", es: "quisiste" }, { en: "You did not want", es: "no quisiste" }, { en: "Did you want?", es: "quisiste?" },
    { en: "He wanted", es: "quiso" }, { en: "He did not want", es: "no quiso" }, { en: "Did he want?", es: "quiso?" },
    { en: "She wanted", es: "quiso" }, { en: "She did not want", es: "no quiso" }, { en: "Did she want?", es: "quiso?" },
    { en: "We wanted", es: "quisimos" }, { en: "We did not want", es: "no quisimos" }, { en: "Did we want?", es: "quisimos?" },
    { en: "They wanted", es: "quisieron" }, { en: "They did not want", es: "no quisieron" }, { en: "Did they want?", es: "quisieron?" },

    // LLEGAR (to arrive)
    { en: "I arrived", es: "llegué" }, { en: "I did not arrive", es: "no llegué" }, { en: "Did I arrive?", es: "llegué?" },
    { en: "You arrived", es: "llegaste" }, { en: "You did not arrive", es: "no llegaste" }, { en: "Did you arrive?", es: "llegaste?" },
    { en: "He arrived", es: "llegó" }, { en: "He did not arrive", es: "no llegó" }, { en: "Did he arrive?", es: "llegó?" },
    { en: "She arrived", es: "llegó" }, { en: "She did not arrive", es: "no llegó" }, { en: "Did she arrive?", es: "llegó?" },
    { en: "We arrived", es: "llegamos" }, { en: "We did not arrive", es: "no llegamos" }, { en: "Did we arrive?", es: "llegamos?" },
    { en: "They arrived", es: "llegaron" }, { en: "They did not arrive", es: "no llegaron" }, { en: "Did they arrive?", es: "llegaron?" }, 

     // DEJAR (to leave)
    { en: "I left", es: "dejé" }, { en: "I did not leave", es: "no dejé" }, { en: "Did I leave?", es: "dejé?" },
    { en: "You left", es: "dejaste" }, { en: "You did not leave", es: "no dejaste" }, { en: "Did you leave?", es: "dejaste?" },
    { en: "He left", es: "dejó" }, { en: "He did not leave", es: "no dejó" }, { en: "Did he leave?", es: "dejó?" },
    { en: "She left", es: "dejó" }, { en: "She did not leave", es: "no dejó" }, { en: "Did she leave?", es: "dejó?" },
    { en: "We left", es: "dejamos" }, { en: "We did not leave", es: "no dejamos" }, { en: "Did we leave?", es: "dejamos?" },
    { en: "They left", es: "dejaron" }, { en: "They did not leave", es: "no dejaron" }, { en: "Did they leave?", es: "dejaron?" },

    // LLEVAR (to carry)
    { en: "I carried", es: "llevé" }, { en: "I did not carry", es: "no llevé" }, { en: "Did I carry?", es: "llevé?" },
    { en: "You carried", es: "llevaste" }, { en: "You did not carry", es: "no llevaste" }, { en: "Did you carry?", es: "llevaste?" },
    { en: "He carried", es: "llevó" }, { en: "He did not carry", es: "no llevó" }, { en: "Did he carry?", es: "llevó?" },
    { en: "She carried", es: "llevó" }, { en: "She did not carry", es: "no llevó" }, { en: "Did she carry?", es: "llevó?" },
    { en: "We carried", es: "llevamos" }, { en: "We did not carry", es: "no llevamos" }, { en: "Did we carry?", es: "llevamos?" },
    { en: "They carried", es: "llevaron" }, { en: "They did not carry", es: "no llevaron" }, { en: "Did they carry?", es: "llevaron?" },

    // ENCONTRAR (to find/meet)
    { en: "I found", es: "encontré" }, { en: "I did not find", es: "no encontré" }, { en: "Did I find?", es: "encontré?" },
    { en: "You found", es: "encontraste" }, { en: "You did not find", es: "no encontraste" }, { en: "Did you find?", es: "encontraste?" },
    { en: "He found", es: "encontró" }, { en: "He did not find", es: "no encontró" }, { en: "Did he find?", es: "encontró?" },
    { en: "She found", es: "encontró" }, { en: "She did not find", es: "no encontró" }, { en: "Did she find?", es: "encontró?" },
    { en: "We found", es: "encontramos" }, { en: "We did not find", es: "no encontramos" }, { en: "Did we find?", es: "encontramos?" },
    { en: "They found", es: "encontraron" }, { en: "They did not find", es: "no encontraron" }, { en: "Did they find?", es: "encontraron?" }
  ], 
   Future: [
    // SER (to be)
    { en: "I will be", es: "seré" }, { en: "I will not be", es: "no seré" }, { en: "Will I be?", es: "seré?" },
    { en: "You will be", es: "serás" }, { en: "You will not be", es: "no serás" }, { en: "Will you be?", es: "serás?" },
    { en: "He will be", es: "será" }, { en: "He will not be", es: "no será" }, { en: "Will he be?", es: "será?" },
    { en: "She will be", es: "será" }, { en: "She will not be", es: "no será" }, { en: "Will she be?", es: "será?" },
    { en: "We will be", es: "seremos" }, { en: "We will not be", es: "no seremos" }, { en: "Will we be?", es: "seremos?" },
    { en: "They will be", es: "serán" }, { en: "They will not be", es: "no serán" }, { en: "Will they be?", es: "serán?" },

    // TENER (to have)
    { en: "I will have", es: "tendré" }, { en: "I will not have", es: "no tendré" }, { en: "Will I have?", es: "tendré?" },
    { en: "You will have", es: "tendrás" }, { en: "You will not have", es: "no tendrás" }, { en: "Will you have?", es: "tendrás?" },
    { en: "He will have", es: "tendrá" }, { en: "He will not have", es: "no tendrá" }, { en: "Will he have?", es: "tendrá?" },
    { en: "She will have", es: "tendrá" }, { en: "She will not have", es: "no tendrá" }, { en: "Will she have?", es: "tendrá?" },
    { en: "We will have", es: "tendremos" }, { en: "We will not have", es: "no tendremos" }, { en: "Will we have?", es: "tendremos?" },
    { en: "They will have", es: "tendrán" }, { en: "They will not have", es: "no tendrán" }, { en: "Will they have?", es: "tendrán?" }, 
  
         // HACER (to do/make)
    { en: "I will do", es: "haré" }, { en: "I will not do", es: "no haré" }, { en: "Will I do?", es: "haré?" },
    { en: "You will do", es: "harás" }, { en: "You will not do", es: "no harás" }, { en: "Will you do?", es: "harás?" },
    { en: "He will do", es: "hará" }, { en: "He will not do", es: "no hará" }, { en: "Will he do?", es: "hará?" },
    { en: "She will do", es: "hará" }, { en: "She will not do", es: "no hará" }, { en: "Will she do?", es: "hará?" },
    { en: "We will do", es: "haremos" }, { en: "We will not do", es: "no haremos" }, { en: "Will we do?", es: "haremos?" },
    { en: "They will do", es: "harán" }, { en: "They will not do", es: "no harán" }, { en: "Will they do?", es: "harán?" },

    // PODER (can/be able to)
    { en: "I will be able to", es: "podré" }, { en: "I will not be able to", es: "no podré" }, { en: "Will I be able to?", es: "podré?" },
    { en: "You will be able to", es: "podrás" }, { en: "You will not be able to", es: "no podrás" }, { en: "Will you be able to?", es: "podrás?" },
    { en: "He will be able to", es: "podrá" }, { en: "He will not be able to", es: "no podrá" }, { en: "Will he be able to?", es: "podrá?" },
    { en: "She will be able to", es: "podrá" }, { en: "She will not be able to", es: "no podrá" }, { en: "Will she be able to?", es: "podrá?" },
    { en: "We will be able to", es: "podremos" }, { en: "We will not be able to", es: "no podremos" }, { en: "Will we be able to?", es: "podremos?" },
    { en: "They will be able to", es: "podrán" }, { en: "They will not be able to", es: "no podrán" }, { en: "Will they be able to?", es: "podrán?" },

    // DECIR (to say)
    { en: "I will say", es: "diré" }, { en: "I will not say", es: "no diré" }, { en: "Will I say?", es: "diré?" },
    { en: "You will say", es: "dirás" }, { en: "You will not say", es: "no dirás" }, { en: "Will you say?", es: "dirás?" },
    { en: "He will say", es: "dirá" }, { en: "He will not say", es: "no dirá" }, { en: "Will he say?", es: "dirá?" },
    { en: "She will say", es: "dirá" }, { en: "She will not say", es: "no dirá" }, { en: "Will she say?", es: "dirá?" },
    { en: "We will say", es: "diremos" }, { en: "We will not say", es: "no diremos" }, { en: "Will we say?", es: "diremos?" },
    { en: "They will say", es: "dirán" }, { en: "They will not say", es: "no dirán" }, { en: "Will they say?", es: "dirán?" },

    // IR (to go)
    { en: "I will go", es: "iré" }, { en: "I will not go", es: "no iré" }, { en: "Will I go?", es: "iré?" },
    { en: "You will go", es: "irás" }, { en: "You will not go", es: "no irás" }, { en: "Will you go?", es: "irás?" },
    { en: "He will go", es: "irá" }, { en: "He will not go", es: "no irá" }, { en: "Will he go?", es: "irá?" },
    { en: "She will go", es: "irá" }, { en: "She will not go", es: "no irá" }, { en: "Will she go?", es: "irá?" },
    { en: "We will go", es: "iremos" }, { en: "We will not go", es: "no iremos" }, { en: "Will we go?", es: "iremos?" },
    { en: "They will go", es: "irán" }, { en: "They will not go", es: "no irán" }, { en: "Will they go?", es: "irán?" },

    // DAR (to give)
    { en: "I will give", es: "daré" }, { en: "I will not give", es: "no daré" }, { en: "Will I give?", es: "daré?" },
    { en: "You will give", es: "darás" }, { en: "You will not give", es: "no darás" }, { en: "Will you give?", es: "darás?" },
    { en: "He will give", es: "dará" }, { en: "He will not give", es: "no dará" }, { en: "Will he give?", es: "dará?" },
    { en: "She will give", es: "dará" }, { en: "She will not give", es: "no dará" }, { en: "Will she give?", es: "dará?" },
    { en: "We will give", es: "daremos" }, { en: "We will not give", es: "no daremos" }, { en: "Will we give?", es: "daremos?" },
    { en: "They will give", es: "darán" }, { en: "They will not give", es: "no darán" }, { en: "Will they give?", es: "darán?" },

    // VER (to see)
    { en: "I will see", es: "veré" }, { en: "I will not see", es: "no veré" }, { en: "Will I see?", es: "veré?" },
    { en: "You will see", es: "verás" }, { en: "You will not see", es: "no verás" }, { en: "Will you see?", es: "verás?" },
    { en: "He will see", es: "verá" }, { en: "He will not see", es: "no verá" }, { en: "Will he see?", es: "verá?" },
    { en: "She will see", es: "verá" }, { en: "She will not see", es: "no verá" }, { en: "Will she see?", es: "verá?" },
    { en: "We will see", es: "veremos" }, { en: "We will not see", es: "no veremos" }, { en: "Will we see?", es: "veremos?" },
    { en: "They will see", es: "verán" }, { en: "They will not see", es: "no verán" }, { en: "Will they see?", es: "verán?" },
     
        // SABER (to know)
    { en: "I will know", es: "sabré" }, { en: "I will not know", es: "no sabré" }, { en: "Will I know?", es: "sabré?" },
    { en: "You will know", es: "sabrás" }, { en: "You will not know", es: "no sabrás" }, { en: "Will you know?", es: "sabrás?" },
    { en: "He will know", es: "sabrá" }, { en: "He will not know", es: "no sabrá" }, { en: "Will he know?", es: "sabrá?" },
    { en: "She will know", es: "sabrá" }, { en: "She will not know", es: "no sabrá" }, { en: "Will she know?", es: "sabrá?" },
    { en: "We will know", es: "sabremos" }, { en: "We will not know", es: "no sabremos" }, { en: "Will we know?", es: "sabremos?" },
    { en: "They will know", es: "sabrán" }, { en: "They will not know", es: "no sabrán" }, { en: "Will they know?", es: "sabrán?" },

    // PASAR (to pass)
    { en: "I will pass", es: "pasaré" }, { en: "I will not pass", es: "no pasaré" }, { en: "Will I pass?", es: "pasaré?" },
    { en: "You will pass", es: "pasarás" }, { en: "You will not pass", es: "no pasarás" }, { en: "Will you pass?", es: "pasarás?" },
    { en: "He will pass", es: "pasará" }, { en: "He will not pass", es: "no pasará" }, { en: "Will he pass?", es: "pasará?" },
    { en: "She will pass", es: "pasará" }, { en: "She will not pass", es: "no pasará" }, { en: "Will she pass?", es: "pasará?" },
    { en: "We will pass", es: "pasaremos" }, { en: "We will not pass", es: "no pasaremos" }, { en: "Will we pass?", es: "pasaremos?" },
    { en: "They will pass", es: "pasarán" }, { en: "They will not pass", es: "no pasarán" }, { en: "Will they pass?", es: "pasarán?" },

    // DEBER (must/should)
    { en: "I will have to", es: "deberé" }, { en: "I will not have to", es: "no deberé" }, { en: "Will I have to?", es: "deberé?" },
    { en: "You will have to", es: "deberás" }, { en: "You will not have to", es: "no deberás" }, { en: "Will you have to?", es: "deberás?" },
    { en: "He will have to", es: "deberá" }, { en: "He will not have to", es: "no deberá" }, { en: "Will he have to?", es: "deberá?" },
    { en: "She will have to", es: "deberá" }, { en: "She will not have to", es: "no deberá" }, { en: "Will she have to?", es: "deberá?" },
    { en: "We will have to", es: "deberemos" }, { en: "We will not have to", es: "no deberemos" }, { en: "Will we have to?", es: "deberemos?" },
    { en: "They will have to", es: "deberán" }, { en: "They will not have to", es: "no deberán" }, { en: "Will they have to?", es: "deberán?" },

    // QUERER (to want/love)
    { en: "I will want", es: "querré" }, { en: "I will not want", es: "no querré" }, { en: "Will I want?", es: "querré?" },
    { en: "You will want", es: "querrás" }, { en: "You will not want", es: "no querrás" }, { en: "Will you want?", es: "querrás?" },
    { en: "He will want", es: "querrá" }, { en: "He will not want", es: "no querrá" }, { en: "Will he want?", es: "querrá?" },
    { en: "She will want", es: "querrá" }, { en: "She will not want", es: "no querrá" }, { en: "Will she want?", es: "querrá?" },
    { en: "We will want", es: "querremos" }, { en: "We will not want", es: "no querremos" }, { en: "Will we want?", es: "querremos?" },
    { en: "They will want", es: "querrán" }, { en: "They will not want", es: "no querrán" }, { en: "Will they want?", es: "querrán?" },

    // LLEGAR (to arrive)
    { en: "I will arrive", es: "llegaré" }, { en: "I will not arrive", es: "no llegaré" }, { en: "Will I arrive?", es: "llegaré?" },
    { en: "You will arrive", es: "llegarás" }, { en: "You will not arrive", es: "no llegarás" }, { en: "Will you arrive?", es: "llegarás?" },
    { en: "He will arrive", es: "llegará" }, { en: "He will not arrive", es: "no llegará" }, { en: "Will he arrive?", es: "llegará?" },
    { en: "She will arrive", es: "llegará" }, { en: "She will not arrive", es: "no llegará" }, { en: "Will she arrive?", es: "llegará?" },
    { en: "We will arrive", es: "llegaremos" }, { en: "We will not arrive", es: "no llegaremos" }, { en: "Will we arrive?", es: "llegaremos?" },
    { en: "They will arrive", es: "llegarán" }, { en: "They will not arrive", es: "no llegarán" }, { en: "Will they arrive?", es: "llegarán?" },

    // DEJAR (to leave)
    { en: "I will leave", es: "dejaré" }, { en: "I will not leave", es: "no dejaré" }, { en: "Will I leave?", es: "dejaré?" },
    { en: "You will leave", es: "dejarás" }, { en: "You will not leave", es: "no dejarás" }, { en: "Will you leave?", es: "dejarás?" },
    { en: "He will leave", es: "dejará" }, { en: "He will not leave", es: "no dejará" }, { en: "Will he leave?", es: "dejará?" },
    { en: "She will leave", es: "dejará" }, { en: "She will not leave", es: "no dejará" }, { en: "Will she leave?", es: "dejará?" },
    { en: "We will leave", es: "dejaremos" }, { en: "We will not leave", es: "no dejaremos" }, { en: "Will we leave?", es: "dejaremos?" },
    { en: "They will leave", es: "dejarán" }, { en: "They will not leave", es: "no dejarán" }, { en: "Will they leave?", es: "dejarán?" },

    // LLEVAR (to carry)
    { en: "I will carry", es: "llevaré" }, { en: "I will not carry", es: "no llevaré" }, { en: "Will I carry?", es: "llevaré?" },
    { en: "You will carry", es: "llevarás" }, { en: "You will not carry", es: "no llevarás" }, { en: "Will you carry?", es: "llevarás?" },
    { en: "He will carry", es: "llevará" }, { en: "He will not carry", es: "no llevará" }, { en: "Will he carry?", es: "llevará?" },
    { en: "She will carry", es: "llevará" }, { en: "She will not carry", es: "no llevará" }, { en: "Will she carry?", es: "llevará?" },
    { en: "We will carry", es: "llevaremos" }, { en: "We will not carry", es: "no llevaremos" }, { en: "Will we carry?", es: "llevaremos?" },
    { en: "They will carry", es: "llevarán" }, { en: "They will not carry", es: "no llevarán" }, { en: "Will they carry?", es: "llevarán?" },

    // ENCONTRAR (to find/meet)
    { en: "I will find", es: "encontraré" }, { en: "I will not find", es: "no encontraré" }, { en: "Will I find?", es: "encontraré?" },
    { en: "You will find", es: "encontrarás" }, { en: "You will not find", es: "no encontrarás" }, { en: "Will you find?", es: "encontrarás?" },
    { en: "He will find", es: "encontrará" }, { en: "He will not find", es: "no encontrará" }, { en: "Will he find?", es: "encontrará?" },
    { en: "She will find", es: "encontrará" }, { en: "She will not find", es: "no encontrará" }, { en: "Will she find?", es: "encontrará?" },
    { en: "We will find", es: "encontraremos" }, { en: "We will not find", es: "no encontraremos" }, { en: "Will we find?", es: "encontraremos?" },
    { en: "They will find", es: "encontrarán" }, { en: "They will not find", es: "no encontrarán" }, { en: "Will they find?", es: "encontrarán?" }
  ]
};

let currentTense = "Present";
let currentLevel = 1;
let unlockedLevels = { Present: 1, Past: 1, Future: 1 };
let gameVerbs = [];
let startTime, timerInterval;

const tenseButtons = document.querySelectorAll(".tense-button");
const levelList = document.getElementById("level-list");
const gameContainer = document.getElementById("game");
const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");

// ✅ TENSE BUTTONS now WORK
tenseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tenseButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTense = btn.dataset.tense;
    renderLevels();
  });
});

// ✅ RENDER LEVELS INITIALLY
renderLevels();

function renderLevels() {
  levelList.style.display = "flex";
  gameContainer.style.display = "none";
  levelList.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    const bestTimeKey = `turbo_verbs_bestTime_${currentTense}_Level${i}`;
    const bestTime = localStorage.getItem(bestTimeKey);
    const locked = i > unlockedLevels[currentTense];

    button.textContent = locked ? `Level ${i} 🔒` : `Level ${i}${bestTime ? ` - Best: ${bestTime}s` : ""}`;
    button.disabled = locked;

    button.addEventListener("click", () => {
      startGame(i);
    });

    levelList.appendChild(button);
  }
}

function startGame(level) {
  currentLevel = level;
  gameVerbs = shuffleArray(VERB_SETS[currentTense]).slice(0, 10);
  levelList.style.display = "none";
  gameContainer.style.display = "block";
  questionsContainer.innerHTML = "";
  resultsContainer.innerHTML = "";

  gameVerbs.forEach(verb => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${verb.en}</strong>: <input type="text" data-answer="${verb.es}">`;
    questionsContainer.appendChild(div);
  });

  startTimer();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${elapsed}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById("submit").addEventListener("click", () => {
  stopTimer();
  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  let penalty = 0;
  let correct = 0;

  document.querySelectorAll("#questions input").forEach(input => {
    if (input.value.trim().toLowerCase() === input.dataset.answer) {
      correct++;
      input.style.border = "2px solid green";
    } else {
      penalty += 30;
      input.style.border = "2px solid red";
    }
  });

  const totalTime = elapsed + penalty;
  resultsContainer.innerHTML = `<h3>Game Over!</h3><p>Correct: ${correct}/10</p><p>Time: ${elapsed}s + Penalty: ${penalty}s = <strong>${totalTime}s</strong></p><h4>Feedback:</h4>`;

  document.querySelectorAll("#questions input").forEach(input => {
    const correctAnswer = input.dataset.answer;
    const userAnswer = input.value.trim();
    if (userAnswer.toLowerCase() !== correctAnswer) {
      const feedback = document.createElement("p");
      feedback.innerHTML = `<strong>${input.previousSibling.textContent}</strong> → Correct answer: <span style='color: green;'>${correctAnswer}</span> | Your answer: <span style='color: red;'>${userAnswer || "(blank)"}</span>`;
      resultsContainer.appendChild(feedback);
    }
  });

  const bestTimeKey = `turbo_verbs_bestTime_${currentTense}_Level${currentLevel}`;
  const savedBestTime = localStorage.getItem(bestTimeKey);
  if (!savedBestTime || totalTime < parseInt(savedBestTime)) {
    localStorage.setItem(bestTimeKey, totalTime);
    showArcadeCode('turbo-verbs', totalTime);
  }

  if (totalTime <= levelUnlockTime(currentLevel)) {
    if (unlockedLevels[currentTense] < currentLevel + 1) {
      unlockedLevels[currentTense] = currentLevel + 1;
      const unlockMsg = document.createElement("p");
      unlockMsg.style.color = "blue";
      unlockMsg.innerHTML = `<strong>Level ${currentLevel + 1} Unlocked!</strong>`;
      resultsContainer.appendChild(unlockMsg);
    }
  }

  if (correct === 10) {
    const celebration = document.createElement("div");
    celebration.className = "perfect-celebration";
    celebration.textContent = "🎉 PERFECT GAME! 🎉";
    resultsContainer.prepend(celebration);

    setTimeout(() => {
      celebration.remove();
    }, 5000);
  }

  const tryAgainButton = document.createElement("button");
  tryAgainButton.textContent = "Try Again";
  tryAgainButton.className = "try-again";
  tryAgainButton.onclick = () => {
    startGame(currentLevel);
  };
  resultsContainer.appendChild(tryAgainButton);

  const backButton = document.createElement("button");
  backButton.textContent = "Back to Levels";
  backButton.id = "back-button";
  backButton.onclick = () => {
    renderLevels();
  };
  resultsContainer.appendChild(backButton);
});

function levelUnlockTime(level) {
  return 100 - (level - 1) * 5;
}