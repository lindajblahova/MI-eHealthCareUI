import {Injectable} from "@angular/core";
import {IDiagnose} from "../objects/interfaces/IDiagnose";
import {PatientService} from "./patient.service";

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {

  private diagnoses: IDiagnose[] =
    [
      {
        idDiagnose: 'A02.2',
        diagnoseName: 'Lokalizovaná salmonelová infekcia',
      },
      {
        idDiagnose: 'A04.9',
        diagnoseName: 'Baktériová črevná infekcia, bližšie neurčená',
      },
      {
        idDiagnose: 'A05.3',
        diagnoseName: 'Potravinová otrava zapríčinená Vibrio parahaemolyticus',
      },
      {
        idDiagnose: 'A06.7',
        diagnoseName: 'Kožná amebóza',
      },
      {
        idDiagnose: 'A15.2',
        diagnoseName: 'Tuberkulóza pľúc, potvrdená histologicky',
      },
      {
        idDiagnose: 'A30.9',
        diagnoseName: 'Lepra, bližšie neurčená',
      },
      {
        idDiagnose: 'A84.1',
        diagnoseName: 'Stredoeurópska kliešťová encefalitída',
      },
      {
        idDiagnose: 'B45.0',
        diagnoseName: 'Kryptokokóza pľúc',
      },
      {
        idDiagnose: 'B97.2!',
        diagnoseName: 'Koronavírus ako príčina chorôb zatriedených inde',
      },
      {
        idDiagnose: 'C17.8!',
        diagnoseName: 'Zhubný nádor tenkého čreva presahujúci viaceré oblasti',
      },
      {
        idDiagnose: 'C34.0',
        diagnoseName: 'Zhubný nádor hlavnej priedušky',
      },
      {
        idDiagnose: 'C40.2',
        diagnoseName: 'Zhubný nádor kosti a klbovej chrupky dlhých kostí dolnej končatiny',
      },
      {
        idDiagnose: 'C69.2',
        diagnoseName: 'Zhubný nádor sietnice',
      },
      {
        idDiagnose: 'C90.1-',
        diagnoseName: 'Plazmocytová leukémia',
      },
      {
        idDiagnose: 'C93.90',
        diagnoseName: 'Monocytová leukémia, bližšie neurčená, bez kompletnej remisie',
      },
      {
        idDiagnose: 'D11.7',
        diagnoseName: 'Nezhubný nádor inej veľkej slinnej žľazy',
      },
      {
        idDiagnose: 'D13.4',
        diagnoseName: 'Nezhubný nádor pečene',
      },
      {
        idDiagnose: 'D50.-',
        diagnoseName: 'Anémia z nedostatku železa',
      },
      {
        idDiagnose: 'D68.9',
        diagnoseName: 'Porucha zrážanlivosti krvi, bližšie neurčená',
      },
      {
        idDiagnose: 'E07.9',
        diagnoseName: 'Choroba štítnej žľazy, bližšie neurčená',
      },
      {
        idDiagnose: 'E11.9-',
        diagnoseName: 'Diabetes mellitus 2. typu: bez komplikácií',
      },
      {
        idDiagnose: 'E61.7',
        diagnoseName: 'Nedostatok viacerých stopových prvkov',
      },
      {
        idDiagnose: 'E66.10',
        diagnoseName: 'Obezita zapríčinená liekmi, BMI: od 30 do menej ako 35',
      },
      {
        idDiagnose: 'E89.0',
        diagnoseName: 'Hypotyreóza po lekárskom výkone',
      },
      {
        idDiagnose: 'F15.2',
        diagnoseName: 'Porucha psychiky a správania zapríčinená užívaním iných stimulancií vrátane kofeínu: syndróm závislosti',
      },
      {
        idDiagnose: 'F32.0',
        diagnoseName: 'Epizóda ľahkej depresie',
      },
      {
        idDiagnose: 'F40.1',
        diagnoseName: 'Sociálna fóbia',
      },
      {
        idDiagnose: 'F80.0',
        diagnoseName: 'Špecifická porucha artikulácie',
      },
      {
        idDiagnose: 'G43.0',
        diagnoseName: 'Migréna bez aury [bežná migréna]',
      },
      {
        idDiagnose: 'G47.0',
        diagnoseName: 'Porucha zaspávania a trvania spánku [insomnia]',
      },
      {
        idDiagnose: 'G71.0',
        diagnoseName: 'Svalová dystrofia',
      },
      {
        idDiagnose: 'H46',
        diagnoseName: 'Zápal zrakového nervu [neuritis n. optici]',
      },
      {
        idDiagnose: 'H54.2',
        diagnoseName: 'Stredne ťažká slabozrakosť, binokulárna',
      },
      {
        idDiagnose: 'I63.1',
        diagnoseName: 'Mozgový infarkt, zapríčinený embóliou prívodných mozgových tepien',
      },
      {
        idDiagnose: 'I74.2',
        diagnoseName: 'Embólia a trombóza tepien horných končatín',
      },
      {
        idDiagnose: 'I87.9',
        diagnoseName: 'Choroba žily, bližšie neurčená',
      },
      {
        idDiagnose: 'J04.0',
        diagnoseName: 'Akútny zápal hrtana',
      },
      {
        idDiagnose: 'J10.0',
        diagnoseName: 'Chrípka zapríčinená iným identifikovaným vírusom chrípky, so zápalom pľúc',
      },
      {
        idDiagnose: 'J20.-',
        diagnoseName: 'Akútny zápal priedušiek [akútna bronchitída]',
      },
      {
        idDiagnose: 'J35.0',
        diagnoseName: 'Chronický zápal mandlí',
      },
      {
        idDiagnose: 'J45.0',
        diagnoseName: 'Bronchiálna astma, prevažne alergická',
      },
      {
        idDiagnose: 'K25.0',
        diagnoseName: 'Vred žalúdka, akútny s krvácaním',
      },
      {
        idDiagnose: 'K70.4',
        diagnoseName: 'Alkoholové zlyhávanie pečene',
      },
      {
        idDiagnose: 'L50.0',
        diagnoseName: 'Alergická žihľavka',
      },
      {
        idDiagnose: 'M01.32*',
        diagnoseName: 'Artritída pri iných baktériových chorobách zatriedených inde, v oblasti nadlaktia (ramenná kosť, lakťový kĺb)',
      },
      {
        idDiagnose: 'M05.29',
        diagnoseName: 'Reumatoidná artritída s vaskulitídou, miesto bližšie neurčené',
      },
      {
        idDiagnose: 'M10.2-',
        diagnoseName: 'Dna zapríčinená liekmi',
      },
      {
        idDiagnose: 'M25.68',
        diagnoseName: 'Stuhnutie kĺbu, nezatriedené inde, na inom mieste (hlava, krk, rebrá, lebka, trup, chrbtica)',
      },
      {
        idDiagnose: 'M41.98',
        diagnoseName: 'Skolióza, bližšie neurčená: krížovej a krížovokostrčovej oblasti',
      },
      {
        idDiagnose: 'S92.1',
        diagnoseName: 'Zlomenina členkovej kosti',
      },
    ];

  constructor(private patientService: PatientService) {
  }

  public getAllDiagnoses(): IDiagnose[] {
    return this.diagnoses;
  }

  public getDiagnose(idDiagnose: string): IDiagnose {
    return this.diagnoses.find(diagnose => diagnose.idDiagnose === idDiagnose);
  }

}
