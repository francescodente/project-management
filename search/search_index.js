const local_index = {"config":{"indexing":"full","lang":["en"],"min_search_length":3,"prebuild_index":false,"separator":"[\\s\\-]+"},"docs":[{"location":"index.html","text":"francescodente/project-management","title":"francescodente/project-management"},{"location":"index.html#francescodenteproject-management","text":"","title":"francescodente/project-management"},{"location":"01_introduzione.html","text":"Introduzione al Project Management Garage e mercato In un garage possono solo nascere idee e prototipi , ma per avere un prodotto sono necessari: analisi dei requisiti/architettura test documentazione piano di manutenzione un business plan (modello di business) Goal e Progetto Goal = cosa deve essere fatto Progetto = come raggiungere il goal La gestione del progetto \u00e8 fondamentale per raggiungere il goal. Cambiamento Per Brooks \u00e8 importante attenersi al risultato dell'analisi iniziale, ma nonostante ci\u00f2 l'unica costante in un progetto \u00e8 il cambiamento ed \u00e8 necessario pianificare il sistema per adattarcisi. Esistono approcci progettuali (e.g. Agile) che assumono che i requisiti possano essere modificati frequentemente in corso d'opera e di conseguenza sono molto flessibili (anche il progetto deve essere sufficientemente flessibile per adattarsi ai cambiamenti). I cambiamenti possono essere a livello di requisiti o a livello di risorse e possono essere dovuti a fattori interni o esterni . \u00c8 importante prevedere i cambiamenti e essere pronti ad affrontarli, poich\u00e8 sono fonte di stress per il personale (tar pit). Complessit\u00e0 Non \u00e8 possibile suddividere progetti complessi in task totalmente indipendenti. Le interrelazioni tra task sono la principale fonte di complessit\u00e0 in un progetto. Inoltre, una buona progettazione permette solo di gestire la complessit\u00e0, non di rimuoverla. Brooks: \"\u00c8 molto pi\u00f9 oneroso realizzare un prodotto che un programma.\" Sistema software = insieme di prodotti che interagiscono tra loro per supportare processi complessi (complessit\u00e0 dell'integrazione/interfacce/input-output). Accidental complexity : dovuta alle tecnologie, pu\u00f2 essere ridotta migliorando le tecnologie. Essential complexity : dovuta al problema, difficile da ridurre. Brooks: Non esiste un silver bullet per ridurre la compessit\u00e0 essenziale. Why does software fail? Mancato rispetto degli obiettivi (integrit\u00e0 concettuale) Errori nelle stime dei tempi Troppo ottimismo Effort != progress Mancato monitoraggio dello stato di avanzamento Aggiunta di personale in corso d'opera Brooks: Gli sviluppatori sono ottimisti. La quantit\u00e0 di risorse allocate determina i costi , ma non la velocit\u00e0 di avanzamento (vedi legge di Masson). I costi per il test sono spesso sottostimati, anche se spesso portano via pi\u00f9 tempo della scrittura del codice principale. Team La corretta composizione del team \u00e8 fondamentale per la riuscita del progetto e dipende dalla metodologia che si intende utilizzare. tradizionale : tante figure molto specializzate (surgical teams) agile : poche figure, tutti devono saper fare tutto (scrum teams) Scrum team Metodologia pi\u00f9 recente per alla gestione dei progetti, in cui l'obiettivo comune del team \u00e8 il successo del progetto. Propone uno sviluppo iterativo e incrementale : ogni iterazione \u00e8 uno sprint con una durata predeterminata. Prevede tre ruoli: Product Owner : responsabile del prodotto e di cosa conterr\u00e0, ma non di come verr\u00e0 realizzato Scrum Master : coach al servizio del team di sviluppo per agevolare la comunicazione e il rispetto degli obiettivi. Team di sviluppo : persone con le competenze per sviluppare la soluzione in autonomia. Composizione dei team \u00c8 importante non avere team di dimensioni troppo grandi, perch\u00e8 richiedono un overhead per la comunicazione. Le dimensioni dei team dovrebbero essere indipendenti dalle dimensioni del progetto (deve sempre esserci un tetto massimo). Integrit\u00e0 concettuale Per rispettare l'integrit\u00e0 concettuale, un sistema deve fare solo quello per cui \u00e8 stato progettato (e nient'altro, altrimenti gli utenti non vorranno imparare a usarlo) e deve farlo nel modo migliore. Per mantenere l'integrit\u00e0 concettuale \u00e8 necessario separare l'architettura dall'implementazione gli architetti decidono cosa il sistema deve essere, le funzionalit\u00e0 gli sviluppatori decidono come il sistema dovr\u00e0 essere implementato per portare a termine le funzionalit\u00e0 richieste Comunicazione Tipi di comunicazione: Informale : es. pausa caff\u00e8 Riunioni : cadenza regolare, aggiornamenti/criticit\u00e0/proposte Workbook : contenitore di tutte le info del progetto formali. Documentazione Documentare il lavoro \u00e8 fondamentale per: spiegare il progetto e le interfacce tra componenti ricordarsi a distanza di tempo cosa si \u00e8 fatto condividere il lavoro tenere traccia dello stato di avanzamento Manuale : documento scritto dall'architetto che descrive le specifiche (in particolare quelle di interfaccia utente). Self-documenting programs : il codice stesso \u00e8 la documentazione principale, poich\u00e8 in questo modo la doc resta tendenzialmente allineata con il codice in maniera immediata. In pi\u00f9 esistono tool per autogenerarla a partire dal codice (es, Javadoc). Documenti per un progetto software Da scrivere opportunamente all'inizio e da mantenere aggiornati durante il progetto. What: objective : bisogni che devono essere soddisfatti What: product specifications : manuale + descrizione dell'implementazione When: schedule : organizzazione temporale del progetto (GANTT) How much: budget : descrizione del budget Where: space allocation : dove star\u00e0 il team Who: organization chart : organizzazione delle risorse umane (molto collegata all'architettura) Motivazioni per la documentazione: Avere le decisioni per iscritto Comunicare le decisioni tra i membri del team e gli utenti Pu\u00f2 essere usata come checklist Agile Ultimamente si stanno sviluppando metodologie di sviluppo pi\u00f9 \"leggere\" rispetto agli approcci tradizionali. Una tra queste \u00e8 la metodologia Agile , riassunta nel Manifesto for Agile Software Development . \u00c8 basato su quattro principi: Individuals and Interactions over processes and tools Working software over comprehensive documentation Customer collaboration over contract negotiation Responding to change over following a plan Inoltre: Soddisfare il cliente \u00e8 la priorit\u00e0 pi\u00f9 alta (continuous delivery) I cambiamenti ai requisiti sono sempre benvenuti Rilasciare preferibilmente con alta frequenza Sviluppatori e clienti devono lavorare insieme giornalmente Motivare gli individui e dargli fiducia Priorit\u00e0 alle conversazioni di persona Progresso = software funzionante Promuovere un ambiente pacifico Eccellenza tecnica Semplicit\u00e0 Team auto-organizzati producono architetture/requisiti/design migliori Il team riflette periodicamente su come migliorarsi","title":"Introduzione"},{"location":"01_introduzione.html#introduzione-al-project-management","text":"","title":"Introduzione al Project Management"},{"location":"01_introduzione.html#garage-e-mercato","text":"In un garage possono solo nascere idee e prototipi , ma per avere un prodotto sono necessari: analisi dei requisiti/architettura test documentazione piano di manutenzione un business plan (modello di business)","title":"Garage e mercato"},{"location":"01_introduzione.html#goal-e-progetto","text":"Goal = cosa deve essere fatto Progetto = come raggiungere il goal La gestione del progetto \u00e8 fondamentale per raggiungere il goal.","title":"Goal e Progetto"},{"location":"01_introduzione.html#cambiamento","text":"Per Brooks \u00e8 importante attenersi al risultato dell'analisi iniziale, ma nonostante ci\u00f2 l'unica costante in un progetto \u00e8 il cambiamento ed \u00e8 necessario pianificare il sistema per adattarcisi. Esistono approcci progettuali (e.g. Agile) che assumono che i requisiti possano essere modificati frequentemente in corso d'opera e di conseguenza sono molto flessibili (anche il progetto deve essere sufficientemente flessibile per adattarsi ai cambiamenti). I cambiamenti possono essere a livello di requisiti o a livello di risorse e possono essere dovuti a fattori interni o esterni . \u00c8 importante prevedere i cambiamenti e essere pronti ad affrontarli, poich\u00e8 sono fonte di stress per il personale (tar pit).","title":"Cambiamento"},{"location":"01_introduzione.html#complessita","text":"Non \u00e8 possibile suddividere progetti complessi in task totalmente indipendenti. Le interrelazioni tra task sono la principale fonte di complessit\u00e0 in un progetto. Inoltre, una buona progettazione permette solo di gestire la complessit\u00e0, non di rimuoverla. Brooks: \"\u00c8 molto pi\u00f9 oneroso realizzare un prodotto che un programma.\" Sistema software = insieme di prodotti che interagiscono tra loro per supportare processi complessi (complessit\u00e0 dell'integrazione/interfacce/input-output). Accidental complexity : dovuta alle tecnologie, pu\u00f2 essere ridotta migliorando le tecnologie. Essential complexity : dovuta al problema, difficile da ridurre. Brooks: Non esiste un silver bullet per ridurre la compessit\u00e0 essenziale.","title":"Complessit\u00e0"},{"location":"01_introduzione.html#why-does-software-fail","text":"Mancato rispetto degli obiettivi (integrit\u00e0 concettuale) Errori nelle stime dei tempi Troppo ottimismo Effort != progress Mancato monitoraggio dello stato di avanzamento Aggiunta di personale in corso d'opera Brooks: Gli sviluppatori sono ottimisti. La quantit\u00e0 di risorse allocate determina i costi , ma non la velocit\u00e0 di avanzamento (vedi legge di Masson). I costi per il test sono spesso sottostimati, anche se spesso portano via pi\u00f9 tempo della scrittura del codice principale.","title":"Why does software fail?"},{"location":"01_introduzione.html#team","text":"La corretta composizione del team \u00e8 fondamentale per la riuscita del progetto e dipende dalla metodologia che si intende utilizzare. tradizionale : tante figure molto specializzate (surgical teams) agile : poche figure, tutti devono saper fare tutto (scrum teams)","title":"Team"},{"location":"01_introduzione.html#scrum-team","text":"Metodologia pi\u00f9 recente per alla gestione dei progetti, in cui l'obiettivo comune del team \u00e8 il successo del progetto. Propone uno sviluppo iterativo e incrementale : ogni iterazione \u00e8 uno sprint con una durata predeterminata. Prevede tre ruoli: Product Owner : responsabile del prodotto e di cosa conterr\u00e0, ma non di come verr\u00e0 realizzato Scrum Master : coach al servizio del team di sviluppo per agevolare la comunicazione e il rispetto degli obiettivi. Team di sviluppo : persone con le competenze per sviluppare la soluzione in autonomia.","title":"Scrum team"},{"location":"01_introduzione.html#composizione-dei-team","text":"\u00c8 importante non avere team di dimensioni troppo grandi, perch\u00e8 richiedono un overhead per la comunicazione. Le dimensioni dei team dovrebbero essere indipendenti dalle dimensioni del progetto (deve sempre esserci un tetto massimo).","title":"Composizione dei team"},{"location":"01_introduzione.html#integrita-concettuale","text":"Per rispettare l'integrit\u00e0 concettuale, un sistema deve fare solo quello per cui \u00e8 stato progettato (e nient'altro, altrimenti gli utenti non vorranno imparare a usarlo) e deve farlo nel modo migliore. Per mantenere l'integrit\u00e0 concettuale \u00e8 necessario separare l'architettura dall'implementazione gli architetti decidono cosa il sistema deve essere, le funzionalit\u00e0 gli sviluppatori decidono come il sistema dovr\u00e0 essere implementato per portare a termine le funzionalit\u00e0 richieste","title":"Integrit\u00e0 concettuale"},{"location":"01_introduzione.html#comunicazione","text":"Tipi di comunicazione: Informale : es. pausa caff\u00e8 Riunioni : cadenza regolare, aggiornamenti/criticit\u00e0/proposte Workbook : contenitore di tutte le info del progetto formali.","title":"Comunicazione"},{"location":"01_introduzione.html#documentazione","text":"Documentare il lavoro \u00e8 fondamentale per: spiegare il progetto e le interfacce tra componenti ricordarsi a distanza di tempo cosa si \u00e8 fatto condividere il lavoro tenere traccia dello stato di avanzamento Manuale : documento scritto dall'architetto che descrive le specifiche (in particolare quelle di interfaccia utente). Self-documenting programs : il codice stesso \u00e8 la documentazione principale, poich\u00e8 in questo modo la doc resta tendenzialmente allineata con il codice in maniera immediata. In pi\u00f9 esistono tool per autogenerarla a partire dal codice (es, Javadoc).","title":"Documentazione"},{"location":"01_introduzione.html#documenti-per-un-progetto-software","text":"Da scrivere opportunamente all'inizio e da mantenere aggiornati durante il progetto. What: objective : bisogni che devono essere soddisfatti What: product specifications : manuale + descrizione dell'implementazione When: schedule : organizzazione temporale del progetto (GANTT) How much: budget : descrizione del budget Where: space allocation : dove star\u00e0 il team Who: organization chart : organizzazione delle risorse umane (molto collegata all'architettura) Motivazioni per la documentazione: Avere le decisioni per iscritto Comunicare le decisioni tra i membri del team e gli utenti Pu\u00f2 essere usata come checklist","title":"Documenti per un progetto software"},{"location":"01_introduzione.html#agile","text":"Ultimamente si stanno sviluppando metodologie di sviluppo pi\u00f9 \"leggere\" rispetto agli approcci tradizionali. Una tra queste \u00e8 la metodologia Agile , riassunta nel Manifesto for Agile Software Development . \u00c8 basato su quattro principi: Individuals and Interactions over processes and tools Working software over comprehensive documentation Customer collaboration over contract negotiation Responding to change over following a plan Inoltre: Soddisfare il cliente \u00e8 la priorit\u00e0 pi\u00f9 alta (continuous delivery) I cambiamenti ai requisiti sono sempre benvenuti Rilasciare preferibilmente con alta frequenza Sviluppatori e clienti devono lavorare insieme giornalmente Motivare gli individui e dargli fiducia Priorit\u00e0 alle conversazioni di persona Progresso = software funzionante Promuovere un ambiente pacifico Eccellenza tecnica Semplicit\u00e0 Team auto-organizzati producono architetture/requisiti/design migliori Il team riflette periodicamente su come migliorarsi","title":"Agile"},{"location":"02_definizione_di_progetto.html","text":"Definizione di Progetto Project Management Body of Knowledge PMBOK \u00e8 uno standard per la professione del PM e fornisce le linee guida per gestire singoli progetti (non in modo uniforme a tutti i progetti). Identifica il sottoinsieme del corpo di conoscenze del project management generalmente riconosciuto come buona prassi. Fornisce inoltre un vocabolario comune. Non \u00e8 uno standard esaustivo, ma solo un riferimento di base. Definizione di progetto PMBOK: Iniziativa temporanea (inizio e fine definiti) per creare un prodotto , un servizio o un altro risultato con caratteristiche di unicit\u00e0 . La fine del progetto si raggiunge quando (una delle seguenti): Sono stati raggiunti gli obiettivi Non \u00e8 pi\u00f9 possibile raggiungere gli obiettivi Non sussiste pi\u00f9 l'esigenza del progetto L'unicit\u00e0 del risultato differenzia un progetto da un' attivit\u00e0 operativa , che \u00e8 invece un processo ripetitivo. Wysocki: Sequenza unica , complessa e connessa di attivit\u00e0 che hanno un goal e che devono essere completate rispettando le specifiche e i vincoli di tempo e di budget . Il risultato finale per\u00f2 potrebbe non soddisfare il cliente, perci\u00f2 si introduce il concetto di business value , ovvero il valore percepito dal destinatario. Perci\u00f2, alla definizione di Wysocki si pu\u00f2 aggiungere che il risultato del progetto deve fornire il business value atteso. Cosa pu\u00f2 produrre un progetto? Un prodotto o un suo componente Un servizio o un suo prerequisito Un processo aziendale Una versione migliorata dei precedenti Conoscenza (progetti di ricerca) Definizione di Programma Insieme di progetti correlati e gestiti in modo coordinato per ottenere benefici ultreriori rispetto alla gestione individuale di progetti. Ciascun progetto \u00e8 una componente del risultato finale del programma. Il program management consiste nella gestione centrallizzata e coordinata del programma con l'obiettivo di raggiungere benefici strategici . Definizione di Portfolio Nel caso pi\u00f9 progetti siano legati solo dalla condivisione di un cliente, fornitore, tecnologia o risorsa si parla di Portfolio . I progetti di un portfolio non devono necessariamente essere correlati o dipendenti. Pianificazione strategica I progetti servono a realizzare il piano strategico di un'organizzazione. Possibili motivazioni per un progetto: Richiesta del mercato Esigenze aziendali Commissione di un cliente Soluzione di problemi Scope del progetto Definisce i confini del progetto in termini di ci\u00f2 che deve essere fatto e di ci\u00f2 che NON deve essere fatto . Quando si parla di software tipicamente coincide con le specifiche funzionali. Va definito prima di iniziare l'implementazione al fine di garantire l'integrit\u00e0 concettuale. Strettamente legato al concetto di Conditions of satisfaction . Lo scope di un progetto pu\u00f2 cambiare nel tempo. Qualit\u00e0 Qualit\u00e0 del prodotto : riferita al deliverable del progetto. Qualit\u00e0 del processo : riferita al processo di gestione del progetto. La corretta gestione della qualit\u00e0 consente di garantire la soddisfazione del cliente e di usare le risorse in modo efficace ed efficiente . Scope Triangle \u00c8 un sistema in equilibrio, dove le lunghezze dei lati corrispondono alle quantit\u00e0 di risorse disponibili e limitano lo scope e la qualit\u00e0 del progetto . Modificare le variabili potrebbe portare il sistema a non essere in equilibrio. Project Impact Statement : stabilisce come affrontare le possibili modifiche di scope richieste dal cliente. Problem Escalation Strategy : stabilisce la strategia con cui affrontare la soluzione dei problemi. Problem Escalation Strategy Who owns what? Rispondere a questa domanda permette di individuare il percorso di risoluzione dei problemi. Responsabilit\u00e0: cliente e senior management : controllo di tempo, budget e risorse; team di progetto : conoscenza di come vengono usati tempo budget e risorse. Passi: PM trova una soluzione nei vincoli di tempo/budget PM chiede di riallocare le risorse PM ricontatta il cliente per rinegoziare budget, tempo e/o risorse Creeps Cambiamenti insidiosi e impercettibili che si possono riscontrare in un progetto e che sono spesso dovuti al team stesso. Scope creep : cambiamento rispetto al piano originario, potrebbe non essere dovuto al team o al cliente, ma semplicemente a necessit\u00e0 di mercato. Hope creep : un membro del team nasconde il fatto di essere in ritardo e fa finta di nulla, convinto di poter recuperare. Effort creep : un membro del team non ha una produttivit\u00e0 adeguata e non ottiene il giusto progresso. Feature creep : un membro del team aggiunge funzionalit\u00e0 non concordate credendole utili; siccome ci\u00f2 che non \u00e8 concordato non verr\u00e0 sicuramente riconosciuto e potrebbe essere addirittura dannoso, \u00e8 necessario richiedere l'autorizzazione, seguendo il giusto iter e interpellando il PM, l'architect e il cliente. Classificazione dei progetti Applicare lo stesso approccio a tutti i progetti \u00e8 dannoso alla loro riuscita. L'approccio va definito in base alla caratteristiche del progetto, ed \u00e8 quindi necessaria una classificazione. Classificazione per: Dimensione : costi, durata, ... Applicazione : sviluppo sw, svilupoo nuovo prodotto, ... Tipo : nuovo, manutenzione, aggiornamento, strategico, ... Complessit\u00e0 Incertezza Rischio Business value Durata ...","title":"Definizione di Progetto"},{"location":"02_definizione_di_progetto.html#definizione-di-progetto","text":"","title":"Definizione di Progetto"},{"location":"02_definizione_di_progetto.html#project-management-body-of-knowledge","text":"PMBOK \u00e8 uno standard per la professione del PM e fornisce le linee guida per gestire singoli progetti (non in modo uniforme a tutti i progetti). Identifica il sottoinsieme del corpo di conoscenze del project management generalmente riconosciuto come buona prassi. Fornisce inoltre un vocabolario comune. Non \u00e8 uno standard esaustivo, ma solo un riferimento di base.","title":"Project Management Body of Knowledge"},{"location":"02_definizione_di_progetto.html#definizione-di-progetto_1","text":"PMBOK: Iniziativa temporanea (inizio e fine definiti) per creare un prodotto , un servizio o un altro risultato con caratteristiche di unicit\u00e0 . La fine del progetto si raggiunge quando (una delle seguenti): Sono stati raggiunti gli obiettivi Non \u00e8 pi\u00f9 possibile raggiungere gli obiettivi Non sussiste pi\u00f9 l'esigenza del progetto L'unicit\u00e0 del risultato differenzia un progetto da un' attivit\u00e0 operativa , che \u00e8 invece un processo ripetitivo. Wysocki: Sequenza unica , complessa e connessa di attivit\u00e0 che hanno un goal e che devono essere completate rispettando le specifiche e i vincoli di tempo e di budget . Il risultato finale per\u00f2 potrebbe non soddisfare il cliente, perci\u00f2 si introduce il concetto di business value , ovvero il valore percepito dal destinatario. Perci\u00f2, alla definizione di Wysocki si pu\u00f2 aggiungere che il risultato del progetto deve fornire il business value atteso. Cosa pu\u00f2 produrre un progetto? Un prodotto o un suo componente Un servizio o un suo prerequisito Un processo aziendale Una versione migliorata dei precedenti Conoscenza (progetti di ricerca)","title":"Definizione di progetto"},{"location":"02_definizione_di_progetto.html#definizione-di-programma","text":"Insieme di progetti correlati e gestiti in modo coordinato per ottenere benefici ultreriori rispetto alla gestione individuale di progetti. Ciascun progetto \u00e8 una componente del risultato finale del programma. Il program management consiste nella gestione centrallizzata e coordinata del programma con l'obiettivo di raggiungere benefici strategici .","title":"Definizione di Programma"},{"location":"02_definizione_di_progetto.html#definizione-di-portfolio","text":"Nel caso pi\u00f9 progetti siano legati solo dalla condivisione di un cliente, fornitore, tecnologia o risorsa si parla di Portfolio . I progetti di un portfolio non devono necessariamente essere correlati o dipendenti.","title":"Definizione di Portfolio"},{"location":"02_definizione_di_progetto.html#pianificazione-strategica","text":"I progetti servono a realizzare il piano strategico di un'organizzazione. Possibili motivazioni per un progetto: Richiesta del mercato Esigenze aziendali Commissione di un cliente Soluzione di problemi","title":"Pianificazione strategica"},{"location":"02_definizione_di_progetto.html#scope-del-progetto","text":"Definisce i confini del progetto in termini di ci\u00f2 che deve essere fatto e di ci\u00f2 che NON deve essere fatto . Quando si parla di software tipicamente coincide con le specifiche funzionali. Va definito prima di iniziare l'implementazione al fine di garantire l'integrit\u00e0 concettuale. Strettamente legato al concetto di Conditions of satisfaction . Lo scope di un progetto pu\u00f2 cambiare nel tempo.","title":"Scope del progetto"},{"location":"02_definizione_di_progetto.html#qualita","text":"Qualit\u00e0 del prodotto : riferita al deliverable del progetto. Qualit\u00e0 del processo : riferita al processo di gestione del progetto. La corretta gestione della qualit\u00e0 consente di garantire la soddisfazione del cliente e di usare le risorse in modo efficace ed efficiente .","title":"Qualit\u00e0"},{"location":"02_definizione_di_progetto.html#scope-triangle","text":"\u00c8 un sistema in equilibrio, dove le lunghezze dei lati corrispondono alle quantit\u00e0 di risorse disponibili e limitano lo scope e la qualit\u00e0 del progetto . Modificare le variabili potrebbe portare il sistema a non essere in equilibrio. Project Impact Statement : stabilisce come affrontare le possibili modifiche di scope richieste dal cliente. Problem Escalation Strategy : stabilisce la strategia con cui affrontare la soluzione dei problemi.","title":"Scope Triangle"},{"location":"02_definizione_di_progetto.html#problem-escalation-strategy","text":"Who owns what? Rispondere a questa domanda permette di individuare il percorso di risoluzione dei problemi. Responsabilit\u00e0: cliente e senior management : controllo di tempo, budget e risorse; team di progetto : conoscenza di come vengono usati tempo budget e risorse. Passi: PM trova una soluzione nei vincoli di tempo/budget PM chiede di riallocare le risorse PM ricontatta il cliente per rinegoziare budget, tempo e/o risorse","title":"Problem Escalation Strategy"},{"location":"02_definizione_di_progetto.html#creeps","text":"Cambiamenti insidiosi e impercettibili che si possono riscontrare in un progetto e che sono spesso dovuti al team stesso. Scope creep : cambiamento rispetto al piano originario, potrebbe non essere dovuto al team o al cliente, ma semplicemente a necessit\u00e0 di mercato. Hope creep : un membro del team nasconde il fatto di essere in ritardo e fa finta di nulla, convinto di poter recuperare. Effort creep : un membro del team non ha una produttivit\u00e0 adeguata e non ottiene il giusto progresso. Feature creep : un membro del team aggiunge funzionalit\u00e0 non concordate credendole utili; siccome ci\u00f2 che non \u00e8 concordato non verr\u00e0 sicuramente riconosciuto e potrebbe essere addirittura dannoso, \u00e8 necessario richiedere l'autorizzazione, seguendo il giusto iter e interpellando il PM, l'architect e il cliente.","title":"Creeps"},{"location":"02_definizione_di_progetto.html#classificazione-dei-progetti","text":"Applicare lo stesso approccio a tutti i progetti \u00e8 dannoso alla loro riuscita. L'approccio va definito in base alla caratteristiche del progetto, ed \u00e8 quindi necessaria una classificazione. Classificazione per: Dimensione : costi, durata, ... Applicazione : sviluppo sw, svilupoo nuovo prodotto, ... Tipo : nuovo, manutenzione, aggiornamento, strategico, ... Complessit\u00e0 Incertezza Rischio Business value Durata ...","title":"Classificazione dei progetti"},{"location":"03_definizione_di_project_management.html","text":"Definizione di Project Management Definizione del PMI (Project Management Institute) Applicazione di consocenze , capacit\u00e0 , strumenti e tecniche alle attivit\u00e0 di progetto per soddisfare i requisiti. Definizione di Wysocki (1) Insieme di strumenti, templates e processi che rispondono alle domande ... Quale situazione aziendale affronta il progetto? : Situazione aziendale = problema o opportunit\u00e0 ; Se non \u00e8 possibile definire immediatamente una soluzione, si dovr\u00e0 usare un approccio per acquisire conoscenza iterativamente (con un conseguente alto rischio ). Cos'hai bisogno di fare? : definizione dello scope . Cosa farai? : conseguenza diretta dello scope/deliverable. Come lo farai? : definizione dell' approccio + piano dettagliato delle attivit\u00e0 . Come saprai che lo hai fatto? : espressione misurabile dei business value , in termini di increased revenue , avoided cost o improved service (criteri di successo). Quanto bene lo hai fatto? : analisi retrospettiva => miglioramento continuo. Definizione di Wysocki (2) Approccio organizzato basato sul \"buon senso\" (bisogna adattare l'approccio alla situazione specifica) che deve prevedere il coinvolgimento del cliente al fine di soddisfare i requisiti fornendo il business value atteso . Cliente: responsabile della definizione del business value. Project Manager: responsabile del soddisfacimento dei requisiti. Cosa sono i Requisiti? Wysocki: Stato finale desiderato, la cui integrazione con successo nella soluzione fornisce un aumento specifico e misurabile di business value. Da notare il fatto che questa definizione contempla solo le soluzioni con un adeguato livello di business value. Project Management Life Cycle Modello di ciclo di vita del Project Management Sequenza di processi raggruppati nei seguenti 5 gruppi: Scoping Planning Execution (launching) Monitoring & Controlling Closing Ogni gruppo deve apparire almeno una volta (quindi possono anche essere ripetuti). TPM = Traditional Project Management xPM = Extreme Project Management APM = Agile Project Management MPx = Emertxe Project Management In base al grado di incertezza \u00e8 possibile scegliere il modello di PM pi\u00f9 adatto, tenendo presente che i modelli lineari/incrementali sono pi\u00f9 adatti quando i requisiti/la soluzione sono pi\u00f9 chiari, e in caso contrario sono pi\u00f9 adatti approcci iterativi/adattivi. Inoltre, quando anche il goal tende a essere poco chiaro, pu\u00f2 essere utile adottare un modello extreme per far fronte ai frequenti cambiamenti di scope. Da notare che i modelli seguono un ordinamento naturale rispetto al grado di incertezza nella soluzione. Pi\u00f9 la soluzione \u00e8 incerta, pi\u00f9 aumenta il numero di processi da ripetere, il rischio e il grado di coinvolgimento del cliente. Linear : Soluzione/requisiti chiari Nessuna modifica rilevante dello scope Uso di template consolidati Incremental : Come linear, ma fornisce business value pi\u00f9 frequentemente Iterative : Requisiti instabili/incompleti Si apprende strada facendo Adaptive : Goal noto, ma non la soluzione Forte influenza dai cambiamenti di scope Adatto allo sviluppo di nuovi prodotti Extreme : Obiettivo e soluzione non conosciuti Si converge iterando Adatto per i progetti di ricerca e sviluppo","title":"Definizione di Project Management"},{"location":"03_definizione_di_project_management.html#definizione-di-project-management","text":"","title":"Definizione di Project Management"},{"location":"03_definizione_di_project_management.html#definizione-del-pmi-project-management-institute","text":"Applicazione di consocenze , capacit\u00e0 , strumenti e tecniche alle attivit\u00e0 di progetto per soddisfare i requisiti.","title":"Definizione del PMI (Project Management Institute)"},{"location":"03_definizione_di_project_management.html#definizione-di-wysocki-1","text":"Insieme di strumenti, templates e processi che rispondono alle domande ... Quale situazione aziendale affronta il progetto? : Situazione aziendale = problema o opportunit\u00e0 ; Se non \u00e8 possibile definire immediatamente una soluzione, si dovr\u00e0 usare un approccio per acquisire conoscenza iterativamente (con un conseguente alto rischio ). Cos'hai bisogno di fare? : definizione dello scope . Cosa farai? : conseguenza diretta dello scope/deliverable. Come lo farai? : definizione dell' approccio + piano dettagliato delle attivit\u00e0 . Come saprai che lo hai fatto? : espressione misurabile dei business value , in termini di increased revenue , avoided cost o improved service (criteri di successo). Quanto bene lo hai fatto? : analisi retrospettiva => miglioramento continuo.","title":"Definizione di Wysocki (1)"},{"location":"03_definizione_di_project_management.html#definizione-di-wysocki-2","text":"Approccio organizzato basato sul \"buon senso\" (bisogna adattare l'approccio alla situazione specifica) che deve prevedere il coinvolgimento del cliente al fine di soddisfare i requisiti fornendo il business value atteso . Cliente: responsabile della definizione del business value. Project Manager: responsabile del soddisfacimento dei requisiti.","title":"Definizione di Wysocki (2)"},{"location":"03_definizione_di_project_management.html#cosa-sono-i-requisiti","text":"Wysocki: Stato finale desiderato, la cui integrazione con successo nella soluzione fornisce un aumento specifico e misurabile di business value. Da notare il fatto che questa definizione contempla solo le soluzioni con un adeguato livello di business value.","title":"Cosa sono i Requisiti?"},{"location":"03_definizione_di_project_management.html#project-management-life-cycle","text":"","title":"Project Management Life Cycle"},{"location":"03_definizione_di_project_management.html#modello-di-ciclo-di-vita-del-project-management","text":"Sequenza di processi raggruppati nei seguenti 5 gruppi: Scoping Planning Execution (launching) Monitoring & Controlling Closing Ogni gruppo deve apparire almeno una volta (quindi possono anche essere ripetuti). TPM = Traditional Project Management xPM = Extreme Project Management APM = Agile Project Management MPx = Emertxe Project Management In base al grado di incertezza \u00e8 possibile scegliere il modello di PM pi\u00f9 adatto, tenendo presente che i modelli lineari/incrementali sono pi\u00f9 adatti quando i requisiti/la soluzione sono pi\u00f9 chiari, e in caso contrario sono pi\u00f9 adatti approcci iterativi/adattivi. Inoltre, quando anche il goal tende a essere poco chiaro, pu\u00f2 essere utile adottare un modello extreme per far fronte ai frequenti cambiamenti di scope. Da notare che i modelli seguono un ordinamento naturale rispetto al grado di incertezza nella soluzione. Pi\u00f9 la soluzione \u00e8 incerta, pi\u00f9 aumenta il numero di processi da ripetere, il rischio e il grado di coinvolgimento del cliente. Linear : Soluzione/requisiti chiari Nessuna modifica rilevante dello scope Uso di template consolidati Incremental : Come linear, ma fornisce business value pi\u00f9 frequentemente Iterative : Requisiti instabili/incompleti Si apprende strada facendo Adaptive : Goal noto, ma non la soluzione Forte influenza dai cambiamenti di scope Adatto allo sviluppo di nuovi prodotti Extreme : Obiettivo e soluzione non conosciuti Si converge iterando Adatto per i progetti di ricerca e sviluppo","title":"Modello di ciclo di vita del Project Management"},{"location":"SUMMARY.html","text":"Introduzione Definizione di Progetto Definizione di Project Management","title":"SUMMARY"}]}; var __search = { index: Promise.resolve(local_index) }