import { Component } from '@angular/core';
import { Meta, Title  } from '@angular/platform-browser';
import { CanonicalService } from './canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thisisgalveston';
    constructor(
      private meta:Meta,
      private titleMeta: Title,
      private canonical: CanonicalService ){ }

  ngOnInit() {
    // this.meta.addTag( { name: "description", content:"Add page description" } );
    // this.meta.removeTag("name='description'");
    // this.meta.updateTag( { name: "description", content:"No meta found." }, "name='description'");
        this.meta.addTags([
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-02-10', scheme: 'YYYY-MM-DD' },
      { name: 'keywords', content: 'Add SEO Meta in Angular.' },
      { name: 'author', content: 'D 5' },
      { name: 'robots', content: 'index, follow' }
    ]);
        this.titleMeta.setTitle(this.title);
        this.canonical.createCanonicalLink();
  }
}
