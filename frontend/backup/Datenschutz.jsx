import React from "react";
import Sidebar from "../components/Sidebar";
import {
  List,
  ListSubheader,
  ListItemText,
  ListItem,
  Typography
} from "@mui/material";

export default function Datenschutz() {
  return (
    // <Sidebar>
    <Typography sx={{ pl: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Datenschutzerklärung
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden
        von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
        Bereitstellung eines funktionsfähigen und nutzerfreundlichen
        Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
        Leistungen, verarbeitet.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
        Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als
        „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten, wie das Erheben, das Erfassen, die
        Organisation, das Ordnen, die Speicherung, die Anpassung oder
        Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung
        durch Übermittlung, Verbreitung oder eine andere Form der
        Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung,
        das Löschen oder die Vernichtung.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
        insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der
        Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
        gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
        entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
        Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
        eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum
        eigener Verantwortung verarbeiten.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Unsere Datenschutzerklärung ist wie folgt gegliedert:
      </Typography>
      <List dense disablePadding>
        <ListItem>I. Informationen über uns als Verantwortliche</ListItem>
        <ListItem>II. Rechte der Nutzer und Betroffenen</ListItem>
        <ListItem>III. Informationen zur Datenverarbeitung</ListItem>
      </List>
      <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
        I. Informationen über uns als Verantwortliche
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Verantwortlicher Anbieter dieses Internetauftritts im
        datenschutzrechtlichen Sinne ist:
      </Typography>
      <List dense disablePadding>
        <ListItem>Gülsen Sayin</ListItem>
        <ListItem>Märkische Str. 46</ListItem>
        <ListItem> 58239, Schwerte</ListItem>
        <ListItem>E-Mail: g.sayin@hotmail.de</ListItem>
      </List>
      {/* [nachfolgende Angaben sind zu ergänzen, sofern ein Externer Datenschutzbeauftragter bestellt ist]



[DSB-Extern – Straße, Hausnummer]<br>[DSB-Extern – Postleitzahl, Ort] */}
      <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
        II. Rechte der Nutzer und Betroffenen
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
        haben die Nutzer und Betroffenen das Recht
      </Typography>
      <List dense disablePadding sx={{ listStyleType: "disc" }}>
        <ListItem sx={{ display: "list-item", ml: 2 }}>
          auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf
          Auskunft über die verarbeiteten Daten, auf weitere Informationen über
          die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15
          DSGVO);
        </ListItem>
        <ListItem sx={{ display: "list-item", ml: 2 }}>
          auf Berichtigung oder Vervollständigung unrichtiger bzw.
          unvollständiger Daten (vgl. auch Art. 16 DSGVO);
        </ListItem>
        <ListItem sx={{ display: "list-item", ml: 2 }}>
          auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art.
          17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß
          Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der
          Verarbeitung nach Maßgabe von Art. 18 DSGVO;
        </ListItem>
        <ListItem sx={{ display: "list-item", ml: 2 }}>
          auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten
          und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche
          (vgl. auch Art. 20 DSGVO);
        </ListItem>
        <ListItem sx={{ display: "list-item", ml: 2, mb: 2 }}>
          auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht
          sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß
          gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch
          Art. 77 DSGVO).
        </ListItem>
      </List>
      <Typography sx={{ marginBottom: 2 }}>
        Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen
        gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede
        Berichtigung oder Löschung von Daten oder die Einschränkung der
        Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt,
        zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese
        Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand
        verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft
        über diese Empfänger.
      </Typography>

      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht
        auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden
        Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs.
        1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch
        gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
        III. Informationen zur Datenverarbeitung
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
        gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
        Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen und nachfolgend keine anderslautenden Angaben zu
        einzelnen Verarbeitungsverfahren gemacht werden.
      </Typography>
      <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2 }}>
        Cookie Manager
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Zur Einholung einer Einwilligung zum Einsatz von technisch nicht
        notwendigen Cookies auf der Website, setzt der Anbieter einen
        Cookie-Manager ein.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Bei dem Aufruf der Website wird ein Cookie mit den
        Einstellungsinformationen auf dem Endgerät des Nutzers abgelegt, sodass
        bei einem weiteren Besuch die Abfrage in Bezug auf die Einwilligung
        nicht erfolgen muss.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Das Cookie ist erforderlich um eine rechtskonforme Einwilligung des
        Nutzers einzuholen.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Die Installation der Cookies kann der Nutzer durch Einstellungen seines
        Browsers verhindern bzw. beenden.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
        Cookies
      </Typography>
      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        a) Sitzungs-Cookies/Session-Cookies
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind
        kleine Textdateien oder andere Speichertechnologien, die durch den von
        Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und
        gespeichert werden. Durch diese Cookies werden im individuellen Umfang
        bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder
        Standortdaten oder Ihre IP-Adresse, verarbeitet.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Durch diese Verarbeitung wird unser Internetauftritt
        benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw.
        die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen
        oder das Angebot einer Warenkorbfunktion ermöglicht.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO,
        sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung
        verarbeitet werden.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Falls die Verarbeitung nicht der Vertragsanbahnung oder
        Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der
        Verbesserung der Funktionalität unseres Internetauftritts.
        Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies
        gelöscht.
      </Typography>
      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        b) Drittanbieter-Cookies
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von
        Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse
        oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten,
        verwendet.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Die Einzelheiten hierzu, insbesondere zu den Zwecken und den
        Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies,
        entnehmen Sie bitte den nachfolgenden Informationen.
      </Typography>
      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        c) Beseitigungsmöglichkeit
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Sie können die Installation der Cookies durch eine Einstellung Ihres
        Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie
        bereits gespeicherte Cookies jederzeit löschen. Die hierfür
        erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret
        genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die
        Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden
        sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die
        Verarbeitung allerdings nicht über die Einstellungen des Browsers
        unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung
        Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und
        Maßnahmen hängen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen
        benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation
        Ihres Flash-Players oder wenden sich an den Hersteller bzw.
        Benutzer-Support.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Sollten Sie die Installation der Cookies verhindern oder einschränken,
        kann dies allerdings dazu führen, dass nicht sämtliche Funktionen
        unseres Internetauftritts vollumfänglich nutzbar sind.
      </Typography>
      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Kontaktanfragen / Kontaktmöglichkeit
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten,
        werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer
        Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
        Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung
        können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet
        worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen, wie bspw. bei einer sich etwaig anschließenden
        Vertragsabwicklung.
      </Typography>
      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Vertragsabwicklung
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Die von Ihnen zur Inanspruchnahme unseres Waren- und/oder
        Dienstleistungsangebots übermittelten Daten werden von uns zum Zwecke
        der Vertragsabwicklung verarbeitet und sind insoweit erforderlich.
        Vertragsschluss und Vertragsabwicklung sind ohne Bereitstellung Ihrer
        Daten nicht möglich.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Wir löschen die Daten mit vollständiger Vertragsabwicklung, müssen dabei
        aber die steuer- und handelsrechtlichen Aufbewahrungsfristen beachten.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Im Rahmen der Vertragsabwicklung geben wir Ihre Daten an das mit der
        Warenlieferung beauftragte Transportunternehmen oder an den
        Finanzdienstleister weiter, soweit die Weitergabe zur Warenauslieferung
        oder zu Bezahlzwecken erforderlich ist.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Rechtsgrundlage für die Weitergabe der Daten ist dann Art. 6 Abs. 1 lit.
        b) DSGVO.
      </Typography>
      <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Instagram
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Datenschutzerklärung:&nbsp;
        <a
          href="https://help.instagram.com/519522125107875"
          rel="nofollow noopener"
          target="_blank"
        >
          https://help.instagram.com/519522125107875
        </a>
      </Typography>
    </Typography>
    // </Sidebar>
  );
}
