import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightJsDirective } from 'ngx-highlight-js';

const r = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightJsDirective],
})
export class AppComponent implements OnInit {
  switchStatus = true;
  html = `<textarea highlight-js [lang]="'html'" [ngModel]="html"></textarea>`;
  random = ``;
  code = `
<p>
  The bare minimum for using highlight.js on a web page is linking to the library along with one of the styles and calling
  <a href="http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload"><code>initHighlightingOnLoad</code></a
  >:
</p>
<pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;/path/to/styles/default.css&quot;&gt;
&lt;script src=&quot;/path/to/highlight.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;hljs.initHighlightingOnLoad();&lt;/script&gt;
</code></pre>
<p>
  This will find and highlight code inside of <code>&lt;pre&gt;&lt;code&gt;</code> tags; it tries to detect the language automatically. If
  automatic detection doesn’t work for you, you can specify the language in the <code>class</code> attribute:
</p>
<pre><code class="language-html">&lt;pre&gt;&lt;code class=&quot;html&quot;&gt;...&lt;/code&gt;&lt;/pre&gt;
</code></pre>
`;

  private getHtml(): string {
    const DATA = [
      `<a href="">1</a>`,
      `<div>2</div>`,
      `<span>3</span>`,
      `<i>4</i>`,
      `<p>5</p>`
    ];
    return DATA[r(0, DATA.length - 1)];
  }

  updateHTML(): void {
    this.html = this.getHtml();
  }

  randomHtml(): void {
    this.random = this.getHtml();
  }

  ngOnInit(): void {
    this.randomHtml();
  }
}
