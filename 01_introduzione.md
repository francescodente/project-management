# Introduzione al Project Management

## Garage e mercato

In un garage possono solo nascere **idee** e **prototipi**, ma per avere un prodotto sono necessari:

- analisi dei requisiti/architettura
- test
- documentazione
- piano di manutenzione
- un business plan (modello di business)

## Goal e Progetto

**Goal** = cosa deve essere fatto

**Progetto** = come raggiungere il goal

La gestione del progetto è fondamentale per raggiungere il goal.

## Cambiamento

Per Brooks è importante attenersi al risultato dell'analisi iniziale, ma nonostante ciò **l'unica costante in un progetto è il cambiamento** ed è necessario pianificare il sistema per adattarcisi.
Esistono approcci progettuali (e.g. Agile) che assumono che i requisiti possano essere modificati frequentemente in corso d'opera e di conseguenza sono molto flessibili (anche il progetto deve essere sufficientemente flessibile per adattarsi ai cambiamenti).

I cambiamenti possono essere a livello di **requisiti** o a livello di **risorse** e possono essere dovuti a fattori **interni** o **esterni**.

È importante prevedere i cambiamenti e essere pronti ad affrontarli, poichè sono fonte di stress per il personale (tar pit).

## Complessità

Non è possibile suddividere progetti complessi in task totalmente indipendenti.
Le **interrelazioni** tra task sono la principale fonte di complessità in un progetto.
Inoltre, una buona progettazione permette solo di gestire la complessità, non di rimuoverla.

> Brooks: "È molto più oneroso realizzare un prodotto che un programma."

**Sistema software** = insieme di prodotti che interagiscono tra loro per supportare processi complessi (complessità dell'integrazione/interfacce/input-output).

- **Accidental complexity**: dovuta alle tecnologie, può essere ridotta migliorando le tecnologie.
- **Essential complexity**: dovuta al problema, difficile da ridurre.

> Brooks: Non esiste un **silver bullet** per ridurre la compessità essenziale.

## Why does software fail?

- Mancato rispetto degli obiettivi (integrità concettuale)
- Errori nelle stime dei tempi
- Troppo ottimismo
- Effort != progress
- Mancato monitoraggio dello stato di avanzamento
- Aggiunta di personale in corso d'opera

> Brooks: Gli sviluppatori sono ottimisti.

La **quantità di risorse** allocate determina i **costi**, ma non la **velocità di avanzamento** (vedi legge di Masson).

I costi per il test sono spesso sottostimati, anche se spesso portano via più tempo della scrittura del codice principale.

## Team

La corretta composizione del team è fondamentale per la riuscita del progetto e dipende dalla metodologia che si intende utilizzare.

- **tradizionale**: tante figure molto specializzate (surgical teams)
- **agile**: poche figure, tutti devono saper fare tutto (scrum teams)

### Scrum team

Metodologia più recente per alla gestione dei progetti, in cui l'obiettivo comune del team è il successo del progetto.
Propone uno sviluppo **iterativo e incrementale**: ogni iterazione è uno sprint con una durata predeterminata.
Prevede tre ruoli:

- **Product Owner**: responsabile del prodotto e di cosa conterrà, ma non di come verrà realizzato
- **Scrum Master**: coach al servizio del team di sviluppo per agevolare la comunicazione e il rispetto degli obiettivi.
- **Team di sviluppo**: persone con le competenze per sviluppare la soluzione in autonomia.

### Composizione dei team

È importante non avere team di dimensioni troppo grandi, perchè richiedono un overhead per la comunicazione.
Le dimensioni dei team dovrebbero essere indipendenti dalle dimensioni del progetto (deve sempre esserci un tetto massimo).

## Integrità concettuale

Per rispettare l'integrità concettuale, un sistema deve fare solo quello per cui è stato progettato (e nient'altro, altrimenti gli utenti non vorranno imparare a usarlo) e deve farlo nel modo migliore.

> Per mantenere l'integrità concettuale è necessario separare l'architettura dall'implementazione

- gli architetti decidono cosa il sistema deve essere, le funzionalità
- gli sviluppatori decidono come il sistema dovrà essere implementato per portare a termine le funzionalità richieste

## Comunicazione

Tipi di comunicazione:

- **Informale**: es. pausa caffè
- **Riunioni**: cadenza regolare, aggiornamenti/criticità/proposte
- **Workbook**: contenitore di tutte le info del progetto formali.

## Documentazione

Documentare il lavoro è fondamentale per:

- spiegare il progetto e le interfacce tra componenti
- ricordarsi a distanza di tempo cosa si è fatto
- condividere il lavoro
- tenere traccia dello stato di avanzamento

**Manuale**: documento scritto dall'architetto che descrive le specifiche (in particolare quelle di interfaccia utente).

**Self-documenting programs**: il codice stesso è la documentazione principale, poichè in questo modo la doc resta tendenzialmente allineata con il codice in maniera immediata.
In più esistono tool per autogenerarla a partire dal codice (es, Javadoc).

### Documenti per un progetto software

Da scrivere opportunamente all'inizio e da mantenere aggiornati durante il progetto.

- **What: objective**: bisogni che devono essere soddisfatti
- **What: product specifications**: manuale + descrizione dell'implementazione
- **When: schedule**: organizzazione temporale del progetto (GANTT)
- **How much: budget**: descrizione del budget
- **Where: space allocation**: dove starà il team
- **Who: organization chart**: organizzazione delle risorse umane (molto collegata all'architettura)

Motivazioni per la documentazione:

- Avere le decisioni per iscritto
- Comunicare le decisioni tra i membri del team e gli utenti
- Può essere usata come checklist