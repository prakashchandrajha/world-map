import { Component } from '@angular/core';
import { CarouselComponent } from "../../shared/carousel/carousel.component";
import { IntroductionC1Component } from "../introduction-c1/introduction-c1.component";
import { FaqComponent } from "../faq/faq.component";
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { GalleryComponent } from "../gallery/gallery.component";
import { TouristPlacesComponent } from "../tourist-places/tourist-places.component";

@Component({
  selector: 'app-heritage-site',
  imports: [CarouselComponent, IntroductionC1Component, FaqComponent, ProfileCardComponent, GalleryComponent, TouristPlacesComponent],
  templateUrl: './heritage-site.component.html',
  styleUrl: './heritage-site.component.css'
})
export class HeritageSiteComponent {

  profileItems = [
    {
      title: 'Amul',
      position: 'left: 50%; top: 0; transform: translateX(-50%) translateY(-50%)',
      description: 'Amul — the Taste of India — is not just a dairy brand, but a white revolution that began in 1946. Born out of a milk crisis, it empowered poor farmers to become owners, not just suppliers. What started as a small movement in Anand is now the worlds largest dairy cooperative, owned by 3.6 million farmers. From scarcity to self-sufficiency, every drop of Amul milk carries the spirit of resilience, rural pride, and cooperative power that transformed India into the worlds milk producer.'
    },
    {
      title: 'Historical',
      subtitle: 'Significance',
      position: 'right: 50px; top: 50px;',
      description: `Before Amul became a household name, it was just a whisper of rebellion in the dusty lanes of Anand, Gujarat. The year was 1946. Tired of being exploited by middlemen who paid meagre prices and controlled the market, a group of farmers, led by the visionary Tribhuvandas Patel, decided to take control of their destiny. What began as a protest soon turned into a purpose: a small cooperative with just two village societies and 247 litres of milk.
In 1950, a young engineer named Dr. Verghese Kurien transformed that small protest into India’s White Revolution, and the cooperative into a movement that would feed a nation.
At the heart of Amul's success lies a simple but powerful idea: ownership at the grassroots. The Three-Tier Cooperative Model was born:
At the village level, farmers pooled milk through Village Dairy Cooperative Societies.
At the district level, it was processed and packaged by Milk Unions.
And at the state level, it was marketed under a single, united brand — Amul. Amul is 100% Indian. 100% farmer-owned. 0% foreign share.

`
    },
    {
      title: 'National',
      subtitle: 'Significance',
      position: 'right: 0; top: 50%; transform: translateX(50%) translateY(-50%)',
      description: `Amul played a historic role in the original White Revolution, its impact goes far beyond the past. Today, Amul continues to lead India’s dairy sector into a new era of innovation, inclusion, and growth. At the heart of this progress are women dairy farmers, whose growing participation is reshaping rural economies and strengthening cooperative power. Amul’s focus on product innovation has led to the introduction of value-added dairy products that cater to changing consumer preferences and health trends.  India has also launched the White Revolution 2.0, launched under the Ministry of Cooperation.
`
    },
    {
      title: 'International',
      subtitle: 'Significance',
      position: 'right: 50px; bottom: 50px;',
      description: `From traditional Indian dairy items to value-added products, Amul continues to meet international quality standards while carrying the taste of India worldwide.From village cooperatives to global shelves, Amul is proudly taking Indian dairy to the world—one drop at a time.
Amul exports its wide range of dairy products to over 50 countries across the globe. In a landmark move, Recently Amul entered the Spain and EU market, launching fresh milk in Spain, marking its official debut in the European Union dairy sector.


In 2024, Amul launched fresh milk in the United States—a historic first for the brand outside India—strengthening its presence in one of the world’s most competitive dairy markets.


With strong momentum and growing demand, Amul plans to expand its footprint to over 100 countries as part of India’s vision for White Revolution 2.0, led by the Ministry of Cooperation. Amul has recognized as the best food and dairy brand 
`
    },
    {
      title: 'Cultural',
      subtitle: 'Impact',
      position: 'left: 50%; bottom: 0; transform: translateX(-50%) translateY(50%)',
      description: `Amul is not just a brand—it’s an emotion for millions of Indians. Amul is deeply embedded in Indian household culture.Its butter, milk, cheese, and sweets are part of everyday meals across the country. A pan-Indian identity—connecting people across languages, regions, and traditions.  Since the 1960s, the Amul Girl has been one of India’s most beloved advertising mascots, representing India's traditional food heritage in a modern, accessible way—both in India and abroad.

Amul’s advertising and brand campaigns have consistently aligned with progressive social themes—from supporting women’s empowerment in dairy farming to celebrating frontline workers during COVID-19, promoting unity in diversity, and encouraging patriotic values. Through both product sourcing and storytelling, Amul promotes values of equality, self-reliance, and collective strength, reinforcing the ethos of a modern, inclusive India.`
    },
    {
      title: 'Educational',
      subtitle: 'Value',
      position: 'left: 50px; bottom: 50px;',
      description: `At its core are the 3.6 million dairy farmers, over 35% of whom are women, turning everyday milk production into a powerful tool for change. Amul transforms women into rural entrepreneurs and leaders. Every year, more than 60,000 farmers benefit from skill development sessions in animal care, sustainable practices, and cooperative governance., Amul actively engages in nutrition awareness drives, school outreach with amul scholarship, and community health campaigns, financial aid, Digitization of Veterinary Services`
    },
    {
      title: 'Cooperative',
      subtitle: 'values',
      position: 'left: 0; top: 50%; transform: translateX(-50%) translateY(-50%)',
      description: `Democratic Participation & Equity: With over 3.6 million producer-members, including a significant number of women, Amul ensures that every farmer has a voice and receives a fair price—reflecting its commitment to equality and inclusion.


Concern for Community: During COVID-19, Amul maintained uninterrupted milk supply chains and led health awareness campaigns, safeguarding both producers and consumers.


Solidarity in Crisis: In the face of natural disasters, Amul stood by its farmers, continuing milk collection and providing essential relief—proving its deep-rooted community commitment.


Celebrating Shared Success: By sponsoring Indian athletes for the Paris Olympics, Amul supports national pride and unity—showing how cooperatives contribute beyond the economy, into the spirit of the nation.
`
    },
    {
      title: 'Potential for',
      subtitle: 'Sustainable Tourism',
      position: 'left: 50px; top: 50px;',
      description: `Amul promotes community-based tourism by connecting visitors with local dairy cooperatives, helping bridge the urban-rural divide. Through its Amul Darshan program, producer members and tourists can visit key facilities like the Dairy Plant, Cattle Feed Plant, Chocolate Plant, and Demonstration Farm, gaining insights into quality milk production and cooperative practices.`
    }
  ];


}
