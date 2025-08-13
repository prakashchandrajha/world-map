import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  faqs = [
  
  {
    question: 'How much milk does Amul procure daily (FY 2023–24)?',
    answer: 'Amul procures around 300 lakh litres of milk every day.'
  },
  {
    question: 'What is Amul’s annual milk procurement volume?',
    answer: 'Amul’s annual milk procurement exceeds 12 billion litres.'
  },
  {
    question: 'How many milk processing plants does Amul operate?',
    answer: 'Amul operates 112 milk processing plants across India.'
  },
  {
    question: 'What is Amul’s total milk processing capacity?',
    answer: 'The total milk processing capacity is approximately 420 lakh litres per day.'
  },
  {
    question: 'What was Amul’s annual turnover in FY 2023–24?',
    answer: 'GCMMF (Amul) recorded an annual turnover of ₹59,545 crore (~$7 billion), and the group turnover was ₹80,000 crore (~$10 billion).'
  },
  {
    question: 'How many farmers are associated with Amul?',
    answer: 'Amul is supported by 3.6 million farmer members and 18 Member Unions.'
  },
  {
    question: 'In how many countries is Amul present?',
    answer: 'Amul products are available in over 50 countries globally.'
  }
];

}
