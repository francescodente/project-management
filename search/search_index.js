const local_index = {"config":{"indexing":"full","lang":["en"],"min_search_length":3,"prebuild_index":false,"separator":"[\\s\\-]+"},"docs":[{"location":"index.html","text":"francescodente/project-management","title":"francescodente/project-management"},{"location":"index.html#francescodenteproject-management","text":"","title":"francescodente/project-management"},{"location":"01_introduzione.html","text":"Introduzione al Project Management Garage e mercato In un garage possono solo nascere idee e prototipi , ma per avere un prodotto sono necessari: analisi dei requisiti/architettura test documentazione piano di manutenzione un business plan (modello di business) Goal e Progetto Goal = cosa deve essere fatto Progetto = come raggiungere il goal La gestione del progetto \u00e8 fondamentale per raggiungere il goal. Cambiamento Per Brooks \u00e8 importante attenersi al risultato dell'analisi iniziale, ma nonostante ci\u00f2 l'unica costante in un progetto \u00e8 il cambiamento ed \u00e8 necessario pianificare il sistema per adattarcisi. Esistono approcci progettuali (e.g. Agile) che assumono che i requisiti possano essere modificati frequentemente in corso d'opera e di conseguenza sono molto flessibili (anche il progetto deve essere sufficientemente flessibile per adattarsi ai cambiamenti). I cambiamenti possono essere a livello di requisiti o a livello di risorse e possono essere dovuti a fattori interni o esterni . \u00c8 importante prevedere i cambiamenti e essere pronti ad affrontarli, poich\u00e8 sono fonte di stress per il personale (tar pit). Complessit\u00e0 Non \u00e8 possibile suddividere progetti complessi in task totalmente indipendenti. Le interrelazioni tra task sono la principale fonte di complessit\u00e0 in un progetto. Inoltre, una buona progettazione permette solo di gestire la complessit\u00e0, non di rimuoverla. Brooks: \"\u00c8 molto pi\u00f9 oneroso realizzare un prodotto che un programma.\" Sistema software = insieme di prodotti che interagiscono tra loro per supportare processi complessi (complessit\u00e0 dell'integrazione/interfacce/input-output). Accidental complexity : dovuta alle tecnologie, pu\u00f2 essere ridotta migliorando le tecnologie. Essential complexity : dovuta al problema, difficile da ridurre. Brooks: Non esiste un silver bullet per ridurre la compessit\u00e0 essenziale. Why does software fail? Mancato rispetto degli obiettivi (integrit\u00e0 concettuale) Errori nelle stime dei tempi Troppo ottimismo Effort != progress Mancato monitoraggio dello stato di avanzamento Aggiunta di personale in corso d'opera Brooks: Gli sviluppatori sono ottimisti. La quantit\u00e0 di risorse allocate determina i costi , ma non la velocit\u00e0 di avanzamento (vedi legge di Masson). I costi per il test sono spesso sottostimati, anche se spesso portano via pi\u00f9 tempo della scrittura del codice principale. Team La corretta composizione del team \u00e8 fondamentale per la riuscita del progetto e dipende dalla metodologia che si intende utilizzare. tradizionale : tante figure molto specializzate (surgical teams) agile : poche figure, tutti devono saper fare tutto (scrum teams) Scrum team Metodologia pi\u00f9 recente per alla gestione dei progetti, in cui l'obiettivo comune del team \u00e8 il successo del progetto. Propone uno sviluppo iterativo e incrementale : ogni iterazione \u00e8 uno sprint con una durata predeterminata. Prevede tre ruoli: Product Owner : responsabile del prodotto e di cosa conterr\u00e0, ma non di come verr\u00e0 realizzato Scrum Master : coach al servizio del team di sviluppo per agevolare la comunicazione e il rispetto degli obiettivi. Team di sviluppo : persone con le competenze per sviluppare la soluzione in autonomia. Composizione dei team \u00c8 importante non avere team di dimensioni troppo grandi, perch\u00e8 richiedono un overhead per la comunicazione. Le dimensioni dei team dovrebbero essere indipendenti dalle dimensioni del progetto (deve sempre esserci un tetto massimo). Integrit\u00e0 concettuale Per rispettare l'integrit\u00e0 concettuale, un sistema deve fare solo quello per cui \u00e8 stato progettato (e nient'altro, altrimenti gli utenti non vorranno imparare a usarlo) e deve farlo nel modo migliore. Per mantenere l'integrit\u00e0 concettuale \u00e8 necessario separare l'architettura dall'implementazione gli architetti decidono cosa il sistema deve essere, le funzionalit\u00e0 gli sviluppatori decidono come il sistema dovr\u00e0 essere implementato per portare a termine le funzionalit\u00e0 richieste Comunicazione Tipi di comunicazione: Informale : es. pausa caff\u00e8 Riunioni : cadenza regolare, aggiornamenti/criticit\u00e0/proposte Workbook : contenitore di tutte le info del progetto formali. Documentazione Documentare il lavoro \u00e8 fondamentale per: spiegare il progetto e le interfacce tra componenti ricordarsi a distanza di tempo cosa si \u00e8 fatto condividere il lavoro tenere traccia dello stato di avanzamento Manuale : documento scritto dall'architetto che descrive le specifiche (in particolare quelle di interfaccia utente). Self-documenting programs : il codice stesso \u00e8 la documentazione principale, poich\u00e8 in questo modo la doc resta tendenzialmente allineata con il codice in maniera immediata. In pi\u00f9 esistono tool per autogenerarla a partire dal codice (es, Javadoc). Documenti per un progetto software Da scrivere opportunamente all'inizio e da mantenere aggiornati durante il progetto. What: objective : bisogni che devono essere soddisfatti What: product specifications : manuale + descrizione dell'implementazione When: schedule : organizzazione temporale del progetto (GANTT) How much: budget : descrizione del budget Where: space allocation : dove star\u00e0 il team Who: organization chart : organizzazione delle risorse umane (molto collegata all'architettura) Motivazioni per la documentazione: Avere le decisioni per iscritto Comunicare le decisioni tra i membri del team e gli utenti Pu\u00f2 essere usata come checklist Agile Ultimamente si stanno sviluppando metodologie di sviluppo pi\u00f9 \"leggere\" rispetto agli approcci tradizionali. Una tra queste \u00e8 la metodologia Agile , riassunta nel Manifesto for Agile Software Development . \u00c8 basato su quattro principi: Individuals and Interactions over processes and tools Working software over comprehensive documentation Customer collaboration over contract negotiation Responding to change over following a plan Inoltre: Soddisfare il cliente \u00e8 la priorit\u00e0 pi\u00f9 alta (continuous delivery) I cambiamenti ai requisiti sono sempre benvenuti Rilasciare preferibilmente con alta frequenza Sviluppatori e clienti devono lavorare insieme giornalmente Motivare gli individui e dargli fiducia Priorit\u00e0 alle conversazioni di persona Progresso = software funzionante Promuovere un ambiente pacifico Eccellenza tecnica Semplicit\u00e0 Team auto-organizzati producono architetture/requisiti/design migliori Il team riflette periodicamente su come migliorarsi","title":"Introduzione"},{"location":"01_introduzione.html#introduzione-al-project-management","text":"","title":"Introduzione al Project Management"},{"location":"01_introduzione.html#garage-e-mercato","text":"In un garage possono solo nascere idee e prototipi , ma per avere un prodotto sono necessari: analisi dei requisiti/architettura test documentazione piano di manutenzione un business plan (modello di business)","title":"Garage e mercato"},{"location":"01_introduzione.html#goal-e-progetto","text":"Goal = cosa deve essere fatto Progetto = come raggiungere il goal La gestione del progetto \u00e8 fondamentale per raggiungere il goal.","title":"Goal e Progetto"},{"location":"01_introduzione.html#cambiamento","text":"Per Brooks \u00e8 importante attenersi al risultato dell'analisi iniziale, ma nonostante ci\u00f2 l'unica costante in un progetto \u00e8 il cambiamento ed \u00e8 necessario pianificare il sistema per adattarcisi. Esistono approcci progettuali (e.g. Agile) che assumono che i requisiti possano essere modificati frequentemente in corso d'opera e di conseguenza sono molto flessibili (anche il progetto deve essere sufficientemente flessibile per adattarsi ai cambiamenti). I cambiamenti possono essere a livello di requisiti o a livello di risorse e possono essere dovuti a fattori interni o esterni . \u00c8 importante prevedere i cambiamenti e essere pronti ad affrontarli, poich\u00e8 sono fonte di stress per il personale (tar pit).","title":"Cambiamento"},{"location":"01_introduzione.html#complessita","text":"Non \u00e8 possibile suddividere progetti complessi in task totalmente indipendenti. Le interrelazioni tra task sono la principale fonte di complessit\u00e0 in un progetto. Inoltre, una buona progettazione permette solo di gestire la complessit\u00e0, non di rimuoverla. Brooks: \"\u00c8 molto pi\u00f9 oneroso realizzare un prodotto che un programma.\" Sistema software = insieme di prodotti che interagiscono tra loro per supportare processi complessi (complessit\u00e0 dell'integrazione/interfacce/input-output). Accidental complexity : dovuta alle tecnologie, pu\u00f2 essere ridotta migliorando le tecnologie. Essential complexity : dovuta al problema, difficile da ridurre. Brooks: Non esiste un silver bullet per ridurre la compessit\u00e0 essenziale.","title":"Complessit\u00e0"},{"location":"01_introduzione.html#why-does-software-fail","text":"Mancato rispetto degli obiettivi (integrit\u00e0 concettuale) Errori nelle stime dei tempi Troppo ottimismo Effort != progress Mancato monitoraggio dello stato di avanzamento Aggiunta di personale in corso d'opera Brooks: Gli sviluppatori sono ottimisti. La quantit\u00e0 di risorse allocate determina i costi , ma non la velocit\u00e0 di avanzamento (vedi legge di Masson). I costi per il test sono spesso sottostimati, anche se spesso portano via pi\u00f9 tempo della scrittura del codice principale.","title":"Why does software fail?"},{"location":"01_introduzione.html#team","text":"La corretta composizione del team \u00e8 fondamentale per la riuscita del progetto e dipende dalla metodologia che si intende utilizzare. tradizionale : tante figure molto specializzate (surgical teams) agile : poche figure, tutti devono saper fare tutto (scrum teams)","title":"Team"},{"location":"01_introduzione.html#scrum-team","text":"Metodologia pi\u00f9 recente per alla gestione dei progetti, in cui l'obiettivo comune del team \u00e8 il successo del progetto. Propone uno sviluppo iterativo e incrementale : ogni iterazione \u00e8 uno sprint con una durata predeterminata. Prevede tre ruoli: Product Owner : responsabile del prodotto e di cosa conterr\u00e0, ma non di come verr\u00e0 realizzato Scrum Master : coach al servizio del team di sviluppo per agevolare la comunicazione e il rispetto degli obiettivi. Team di sviluppo : persone con le competenze per sviluppare la soluzione in autonomia.","title":"Scrum team"},{"location":"01_introduzione.html#composizione-dei-team","text":"\u00c8 importante non avere team di dimensioni troppo grandi, perch\u00e8 richiedono un overhead per la comunicazione. Le dimensioni dei team dovrebbero essere indipendenti dalle dimensioni del progetto (deve sempre esserci un tetto massimo).","title":"Composizione dei team"},{"location":"01_introduzione.html#integrita-concettuale","text":"Per rispettare l'integrit\u00e0 concettuale, un sistema deve fare solo quello per cui \u00e8 stato progettato (e nient'altro, altrimenti gli utenti non vorranno imparare a usarlo) e deve farlo nel modo migliore. Per mantenere l'integrit\u00e0 concettuale \u00e8 necessario separare l'architettura dall'implementazione gli architetti decidono cosa il sistema deve essere, le funzionalit\u00e0 gli sviluppatori decidono come il sistema dovr\u00e0 essere implementato per portare a termine le funzionalit\u00e0 richieste","title":"Integrit\u00e0 concettuale"},{"location":"01_introduzione.html#comunicazione","text":"Tipi di comunicazione: Informale : es. pausa caff\u00e8 Riunioni : cadenza regolare, aggiornamenti/criticit\u00e0/proposte Workbook : contenitore di tutte le info del progetto formali.","title":"Comunicazione"},{"location":"01_introduzione.html#documentazione","text":"Documentare il lavoro \u00e8 fondamentale per: spiegare il progetto e le interfacce tra componenti ricordarsi a distanza di tempo cosa si \u00e8 fatto condividere il lavoro tenere traccia dello stato di avanzamento Manuale : documento scritto dall'architetto che descrive le specifiche (in particolare quelle di interfaccia utente). Self-documenting programs : il codice stesso \u00e8 la documentazione principale, poich\u00e8 in questo modo la doc resta tendenzialmente allineata con il codice in maniera immediata. In pi\u00f9 esistono tool per autogenerarla a partire dal codice (es, Javadoc).","title":"Documentazione"},{"location":"01_introduzione.html#documenti-per-un-progetto-software","text":"Da scrivere opportunamente all'inizio e da mantenere aggiornati durante il progetto. What: objective : bisogni che devono essere soddisfatti What: product specifications : manuale + descrizione dell'implementazione When: schedule : organizzazione temporale del progetto (GANTT) How much: budget : descrizione del budget Where: space allocation : dove star\u00e0 il team Who: organization chart : organizzazione delle risorse umane (molto collegata all'architettura) Motivazioni per la documentazione: Avere le decisioni per iscritto Comunicare le decisioni tra i membri del team e gli utenti Pu\u00f2 essere usata come checklist","title":"Documenti per un progetto software"},{"location":"01_introduzione.html#agile","text":"Ultimamente si stanno sviluppando metodologie di sviluppo pi\u00f9 \"leggere\" rispetto agli approcci tradizionali. Una tra queste \u00e8 la metodologia Agile , riassunta nel Manifesto for Agile Software Development . \u00c8 basato su quattro principi: Individuals and Interactions over processes and tools Working software over comprehensive documentation Customer collaboration over contract negotiation Responding to change over following a plan Inoltre: Soddisfare il cliente \u00e8 la priorit\u00e0 pi\u00f9 alta (continuous delivery) I cambiamenti ai requisiti sono sempre benvenuti Rilasciare preferibilmente con alta frequenza Sviluppatori e clienti devono lavorare insieme giornalmente Motivare gli individui e dargli fiducia Priorit\u00e0 alle conversazioni di persona Progresso = software funzionante Promuovere un ambiente pacifico Eccellenza tecnica Semplicit\u00e0 Team auto-organizzati producono architetture/requisiti/design migliori Il team riflette periodicamente su come migliorarsi","title":"Agile"},{"location":"02_definizione_di_progetto.html","text":"Definizione di Progetto Project Management Body of Knowledge PMBOK \u00e8 uno standard per la professione del PM e fornisce le linee guida per gestire singoli progetti (non in modo uniforme a tutti i progetti). Identifica il sottoinsieme del corpo di conoscenze del project management generalmente riconosciuto come buona prassi. Fornisce inoltre un vocabolario comune. Non \u00e8 uno standard esaustivo, ma solo un riferimento di base. Definizione di progetto PMBOK: Iniziativa temporanea (inizio e fine definiti) per creare un prodotto , un servizio o un altro risultato con caratteristiche di unicit\u00e0 . La fine del progetto si raggiunge quando (una delle seguenti): sono stati raggiunti gli obiettivi non \u00e8 pi\u00f9 possibile raggiungere gli obiettivi non sussiste pi\u00f9 l'esigenza del progetto L'unicit\u00e0 del risultato differenzia un progetto da un' attivit\u00e0 operativa , che \u00e8 invece un processo ripetitivo. Wysocki: Sequenza unica , complessa e connessa di attivit\u00e0 che hanno un goal e che devono essere completate rispettando le specifiche e i vincoli di tempo e di budget . Il risultato finale per\u00f2 potrebbe non soddisfare il cliente, perci\u00f2 si introduce il concetto di business value , ovvero il valore percepito dal destinatario. Perci\u00f2, alla definizione di Wysocki si pu\u00f2 aggiungere che il risultato del progetto deve fornire il business value atteso. Cosa pu\u00f2 produrre un progetto? un prodotto o un suo componente un servizio o un suo prerequisito un processo aziendale una versione migliorata dei precedenti conoscenza (progetti di ricerca) Definizione di Programma Insieme di progetti correlati e gestiti in modo coordinato per ottenere benefici ultreriori rispetto alla gestione individuale di progetti. Ciascun progetto \u00e8 una componente del risultato finale del programma. Il program management consiste nella gestione centrallizzata e coordinata del programma con l'obiettivo di raggiungere benefici strategici .","title":"Definizione di Progetto"},{"location":"02_definizione_di_progetto.html#definizione-di-progetto","text":"","title":"Definizione di Progetto"},{"location":"02_definizione_di_progetto.html#project-management-body-of-knowledge","text":"PMBOK \u00e8 uno standard per la professione del PM e fornisce le linee guida per gestire singoli progetti (non in modo uniforme a tutti i progetti). Identifica il sottoinsieme del corpo di conoscenze del project management generalmente riconosciuto come buona prassi. Fornisce inoltre un vocabolario comune. Non \u00e8 uno standard esaustivo, ma solo un riferimento di base.","title":"Project Management Body of Knowledge"},{"location":"02_definizione_di_progetto.html#definizione-di-progetto_1","text":"PMBOK: Iniziativa temporanea (inizio e fine definiti) per creare un prodotto , un servizio o un altro risultato con caratteristiche di unicit\u00e0 . La fine del progetto si raggiunge quando (una delle seguenti): sono stati raggiunti gli obiettivi non \u00e8 pi\u00f9 possibile raggiungere gli obiettivi non sussiste pi\u00f9 l'esigenza del progetto L'unicit\u00e0 del risultato differenzia un progetto da un' attivit\u00e0 operativa , che \u00e8 invece un processo ripetitivo. Wysocki: Sequenza unica , complessa e connessa di attivit\u00e0 che hanno un goal e che devono essere completate rispettando le specifiche e i vincoli di tempo e di budget . Il risultato finale per\u00f2 potrebbe non soddisfare il cliente, perci\u00f2 si introduce il concetto di business value , ovvero il valore percepito dal destinatario. Perci\u00f2, alla definizione di Wysocki si pu\u00f2 aggiungere che il risultato del progetto deve fornire il business value atteso. Cosa pu\u00f2 produrre un progetto? un prodotto o un suo componente un servizio o un suo prerequisito un processo aziendale una versione migliorata dei precedenti conoscenza (progetti di ricerca)","title":"Definizione di progetto"},{"location":"02_definizione_di_progetto.html#definizione-di-programma","text":"Insieme di progetti correlati e gestiti in modo coordinato per ottenere benefici ultreriori rispetto alla gestione individuale di progetti. Ciascun progetto \u00e8 una componente del risultato finale del programma. Il program management consiste nella gestione centrallizzata e coordinata del programma con l'obiettivo di raggiungere benefici strategici .","title":"Definizione di Programma"},{"location":"SUMMARY.html","text":"Introduzione Definizione di Progetto","title":"SUMMARY"}]}; var __search = { index: Promise.resolve(local_index) }