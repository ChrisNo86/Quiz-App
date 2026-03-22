let quiz = {
  HTML: [
    {
    question: "Was macht das &lt;meta&gt;-Tag in HTML?",
    answers: {
      answer1: "Erstellt Links",
      answer2: "Definiert Metadaten",
      answer3: "Zeigt Bilder an",
      answer4: "Erstellt Listen",
    },
    right_answer: 2,
  },
    {
      question: "Welches HTML-Tag wird verwendet, um eine Überschrift zu erstellen?",
      answers: {
        answer1: "&lt;title&gt;",
        answer2: "&lt;h1&gt;",
        answer3: "&lt;head&gt;",
        answer4: "&lt;header&gt;",
      },
      right_answer: 2,
    },
     {
      question: "Welches Attribut wird für Bilder verwendet?",
      answers: {
        answer1: "href",
        answer2: "src",
        answer3: "link",
        answer4: "path",
      },
      right_answer: 2,
    },
    {
      question: "Welches HTML-Tag wird verwendet, um ein Bild in eine Webseite einzufügen?",
      answers: {
        answer1: "&lt;figure&gt;",
        answer2: "&lt;img&gt;",
        answer3: "&lt;pic&gt;",
        answer4: "&lt;image&gt;",
      },
      right_answer: 2,
    },
    {
      question: "Welches Attribut verwendet man, um einem Bild eine Quelle zuzuweisen?",
      answers: {
        answer1: "link",
        answer2: "href",
        answer3: "src",
        answer4: "source",
      },
      right_answer: 3,
    },
      {
    question: "Welches Tag wird für Tabellenzeilen verwendet?",
    answers: {
      answer1: "&lt;td&gt;",
      answer2: "&lt;tr&gt;",
      answer3: "&lt;th&gt;",
      answer4: "&lt;table-row&gt;",
    },
    right_answer: 2,
  }
  ],
  CSS: [
    {
      question: "Was macht CSS?",
      answers: {
        answer1: "Logik",
        answer2: "Design & Layout",
        answer3: "Daten speichern",
        answer4: "Server steuern",
      },
      right_answer: 2,
    },
    {
      question: "Wie wählt man eine Klasse?",
      answers: {
        answer1: "#name",
        answer2: ".name",
        answer3: "*name",
        answer4: "name",
      },
      right_answer: 2,
    },
    {
      question: "Wie ändert man die Textfarbe?",
      answers: {
        answer1: "font-color",
        answer2: "text-style",
        answer3: "color",
        answer4: "background",
      },
      right_answer: 3,
    },
    {
      question: "Was macht margin?",
      answers: {
        answer1: "Innenabstand",
        answer2: "Außenabstand",
        answer3: "Rahmen",
        answer4: "Position",
      },
      right_answer: 2,
    },
    {
      question: "Was macht display: flex?",
      answers: {
        answer1: "Grid aktivieren",
        answer2: "Flexbox Layout",
        answer3: "Block anzeigen",
        answer4: "Verstecken",
      },
      right_answer: 2,
    },
    {
      question: "Wie setzt man Hintergrundfarbe?",
      answers: {
        answer1: "bg",
        answer2: "color-bg",
        answer3: "background-color",
        answer4: "background-style",
      },
      right_answer: 3,
    },
  ],
  JavaScript: [
    {
      question: "Was ist JavaScript?",
      answers: {
        answer1: "Markup",
        answer2: "Programmiersprache",
        answer3: "Stylesheet",
        answer4: "Datenbank",
      },
      right_answer: 2,
    },
    {
      question: "Wie erstellt man eine Variable?",
      answers: {
        answer1: "int x",
        answer2: "let x",
        answer3: "var:x",
        answer4: "x := 5",
      },
      right_answer: 2,
    },
    {
      question: "Was macht console.log()?",
      answers: {
        answer1: "Speichern",
        answer2: "Ausgabe",
        answer3: "Berechnen",
        answer4: "Rendern",
      },
      right_answer: 2,
    },
    {
      question: "Was ist ein Array?",
      answers: {
        answer1: "Funktion",
        answer2: "Liste von Werten",
        answer3: "Variable",
        answer4: "Klasse",
      },
      right_answer: 2,
    },
    {
      question: "Was macht ===?",
      answers: {
        answer1: "Zuweisung",
        answer2: "Vergleich (Typ + Wert)",
        answer3: "Addition",
        answer4: "String-Verkettung",
      },
      right_answer: 2,
    },
    {
      question: "Wie definiert man eine Funktion?",
      answers: {
        answer1: "function test() {}",
        answer2: "func test()",
        answer3: "def test()",
        answer4: "create test()",
      },
      right_answer: 1,
    },
  ],
  Angular: [
    {
      question: "Was ist Angular?",
      answers: {
        answer1: "Backend",
        answer2: "Frontend Framework",
        answer3: "Datenbank",
        answer4: "Sprache",
      },
      right_answer: 2,
    },
    {
      question: "Was macht *ngIf?",
      answers: {
        answer1: "Loop",
        answer2: "Bedingung",
        answer3: "Event",
        answer4: "Style",
      },
      right_answer: 2,
    },
    {
      question: "Was macht *ngFor?",
      answers: {
        answer1: "Loop",
        answer2: "Condition",
        answer3: "API Call",
        answer4: "Routing",
      },
      right_answer: 1,
    },
    {
      question: "Wie bindet man Daten?",
      answers: {
        answer1: "{data}",
        answer2: "{{data}}",
        answer3: "[data]",
        answer4: "(data)",
      },
      right_answer: 2,
    },
    {
      question: "Was ist ein Service?",
      answers: {
        answer1: "UI Element",
        answer2: "Logik/Datendienst",
        answer3: "CSS",
        answer4: "HTML Tag",
      },
      right_answer: 2,
    },
    {
      question: "Standard Port Angular?",
      answers: {
        answer1: "3000",
        answer2: "4200",
        answer3: "8080",
        answer4: "5000",
      },
      right_answer: 2,
    },
  ],
"C#": [
    {
      question: "Was ist C#?",
      answers: {
        answer1: "Markup",
        answer2: "Objektorientierte Sprache",
        answer3: "Stylesheet",
        answer4: "Framework",
      },
      right_answer: 2,
    },
    {
      question: "Wie deklariert man eine Variable?",
      answers: {
        answer1: "let x = 5",
        answer2: "int x = 5",
        answer3: "var:x",
        answer4: "x := 5",
      },
      right_answer: 2,
    },
    {
      question: "Was macht Console.WriteLine()?",
      answers: {
        answer1: "Input",
        answer2: "Output",
        answer3: "Loop",
        answer4: "Variable",
      },
      right_answer: 2,
    },
    {
      question: "Was ist eine Klasse?",
      answers: {
        answer1: "Variable",
        answer2: "Funktion",
        answer3: "Blueprint für Objekte",
        answer4: "Loop",
      },
      right_answer: 3,
    },
    {
      question: "Welche Schleife gibt es?",
      answers: {
        answer1: "repeat",
        answer2: "foreach",
        answer3: "loop",
        answer4: "cycle",
      },
      right_answer: 2,
    },
    {
      question: "Was ist 'using'?",
      answers: {
        answer1: "Variable",
        answer2: "Namespace import",
        answer3: "Loop",
        answer4: "Klasse",
      },
      right_answer: 2,
    },
  ],
};
