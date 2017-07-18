import { Component, OnInit } from '@angular/core';
import { Proposal }  from './proposal';
@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  proposalOne: Proposal = new Proposal(15, 'Wpexchange', 'http://wpexchange.com', 'Wordpress site', 150, 120,15, 'curtisaallen@gmail.com');
  proposalTwo: Proposal = new Proposal(15, 'google', 'http://wpexchange.com', 'Wordpress site', 150, 120,15, 'curtisaallen@gmail.com');
  proposalThree: Proposal = new Proposal(15, 'Divine 9 Apparel', 'http://wpexchange.com', 'Wordpress site', 150, 120,15, 'curtisaallen@gmail.com');
  
  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ];
  constructor() { }

  ngOnInit() {
  }

}
