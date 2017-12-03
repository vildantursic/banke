import { AfterViewInit, Component } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit {

  article = {
    title: 'Neka vijest',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus faucibus tellus at rutrum. Aliquam sit amet diam purus. In sem turpis, tincidunt id venenatis ac, fringilla molestie lorem. Pellentesque convallis porta sem non ultrices. Vivamus quis urna semper, viverra tortor sed, sodales risus. Donec suscipit, sapien at consequat sodales, ante dui ullamcorper arcu, nec mattis dolor ipsum congue elit. Curabitur dapibus luctus massa, in egestas arcu tempus non. Aenean eleifend est metus, et commodo erat ultrices vel. Curabitur blandit est orci, a porta justo faucibus et. Aliquam laoreet nisl lectus, lacinia feugiat sem consequat ac.

    Praesent tincidunt, neque ut bibendum auctor, turpis nibh lacinia mi, sit amet placerat orci ante quis tellus. Aenean mattis commodo purus, at molestie nisi ultrices vel. Pellentesque non eros et ligula vestibulum molestie pulvinar eget sapien. In dignissim neque est, et porta purus lacinia eget. Integer et imperdiet enim, ornare vehicula felis. Nullam vitae pharetra diam. Nullam nec diam nec nibh fermentum convallis sed eget metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse convallis est leo, ut consectetur velit rhoncus at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pellentesque purus quis magna luctus sagittis. Suspendisse blandit, leo ut luctus interdum, elit leo gravida nisl, a aliquet dui odio et quam. Morbi fermentum odio vel dictum vehicula. Nullam rhoncus mauris a neque venenatis, ut mollis nunc porta.
    
    Fusce consequat hendrerit nisi fringilla auctor. Sed at porta ante. Praesent lacinia, lacus non mollis faucibus, ante ipsum placerat quam, non luctus arcu justo vel quam. Praesent lobortis, enim vel condimentum ultrices, purus ex auctor risus, nec ullamcorper nulla elit et elit. Ut pulvinar elementum tortor, eget pulvinar elit. Etiam commodo ornare elit et vestibulum. Nunc efficitur, ante quis fermentum porttitor, metus ante laoreet nulla, ut dapibus ex quam non odio. Sed commodo elementum molestie. Donec auctor gravida enim, vitae accumsan augue tempor semper. Etiam et metus imperdiet sapien euismod facilisis nec at nisi. Aliquam ullamcorper consectetur tristique. Nam consequat odio sed mauris varius, vel ullamcorper diam finibus. Vivamus sem nisi, porttitor ut eros sit amet, malesuada vulputate dolor. Aenean nec fermentum dui. Vestibulum lacus sem, facilisis vel tempus id, iaculis ac erat.
    
    Maecenas nec elit leo. Curabitur fermentum orci in tellus venenatis commodo. Aliquam vitae efficitur est. Cras quis tempus ligula, vel mattis neque. Aliquam erat volutpat. Pellentesque eu placerat ante. Sed aliquet tincidunt nibh at aliquet. Quisque sodales pharetra aliquet. Aenean egestas ullamcorper nulla nec dignissim. Proin ullamcorper dignissim feugiat. Maecenas et maximus nibh. Etiam id sapien gravida, hendrerit neque sit amet, pretium dui.
    
    Sed mattis eget eros at lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin nulla nisl, finibus sed velit sit amet, sagittis finibus neque. Nulla tempor non dolor at tempor. Donec arcu ex, efficitur quis auctor id, sollicitudin quis ex. Morbi fringilla felis in dui congue, a condimentum risus eleifend. In lacinia enim ut urna viverra viverra. Quisque facilisis libero vel felis venenatis maximus. Ut sed libero sed neque pharetra porta. Maecenas iaculis auctor neque varius congue. In ultrices erat eget facilisis viverra. Donec in sapien nec eros euismod ultrices. Aenean non tristique nulla. Mauris non ipsum eget ante dapibus cursus. Praesent scelerisque dui dui, interdum accumsan augue placerat ac. Vivamus consectetur sagittis nunc eu eleifend.
    `,
    categories: [
      'biznis', 'finansije', 'banke'
    ],
    date: '19.04.1993',
    author: 'Vildan Tursic'
  };
  news = [1, 2, 3, 4, 5];
  interviews = [1, 2, 3];
  globalNews = [1, 2, 3];

  constructor() { }

  ngAfterViewInit() {
    jQuery('.ui.sticky')
      .sticky({
        offset       : 450,
        bottomOffset : 50,
        context: '#context'
      })
  }

}
