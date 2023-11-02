import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const monaco: any;

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit, AfterViewInit {

  @ViewChild("editor") editorContent: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    const onGotAmdLoader = () => {
      // Load monaco
      (window as any).require(["vs/editor/editor.main"], () => {
        this.initMonaco();
      });
    };

    // Load AMD loader if necessary
    if (!(window as any).require) {
      const loaderScript = document.createElement("script");
      loaderScript.type = "text/javascript";
      loaderScript.src = "vs/loader.js";
      loaderScript.addEventListener("load", onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  }

  // Will be called once monaco library is available
  initMonaco() {
    const myDiv: HTMLDivElement = this.editorContent.nativeElement;
    monaco.editor.create(myDiv, {
      value: [
        "function x() {",
        "\tconsole.log('Hello world!');",
        "}"
      ].join("\n"),
      language: "javascript",
      theme: "vs-dark"
    });
  }

}
