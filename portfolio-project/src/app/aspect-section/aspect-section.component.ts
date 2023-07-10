import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dictionary } from 'express-serve-static-core';

@Component({
  selector: 'app-aspect-section',
  templateUrl: './aspect-section.component.html',
  styleUrls: ['./aspect-section.component.scss']
})

export class AspectSectionComponent {
  @Input()
  title!: string;
  
  knowledgeLevels = {
    0:"Entry-level knowledge and 1-2 projects of experience",
    1:"Deep conceptual understanding, ~3 projects of experience",
    2:"Deep conceptual understanding, 4+ projects of experience",
    3:"Deep understanding and several complex projects of experience",
  };

  classArr = [
    "knowledge-level-zero",
    "knowledge-level-one",
    "knowledge-level-two",
    "knowledge-level-three",
  ];

  skills = {
"C#": 3,
"C++": 2,
"C": 2,
"PowerShell": 3,
"Python": 3,
".NET": 3,
"Artificial Intelligence": 2,
"Java": 0,
"HTML": 2,
"CSS": 2,
"JavaScript/TypeScript": 2,
"Assembly": 0,
"SQL (PostGreSQL and MySQL)": 1,
"Windows Active Directory": 2,
"Windows Autounattend Configuration for Automated Setup": 3,
"Git": 2,
"Networking Protocols": 1,
"Networking": 1,
"Windows Operating System": 2,
"PHP": 1,
"Django": 2,
"Angular": 2,
"Drupal": 2,
"Kali Linux": 2,
"Wireshark": 2,
"Computer Hardware": 2,
"Visual Studio": 2,
"Visual Studio Code": 2,
};

valueAscOrder = (a: KeyValue<string,number>, b: KeyValue<string,number>): number => a.value > b.value ? -1 : (b.value > a.value ? 1 : 0);

valueAscLevels = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  constructor(){

  }
}
