import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[fancybox]'
})
export class FancyboxDirective implements OnInit {
    @Input('fancybox') _fancybox: string;
    @Input() caption: string;
    @Input() options: Object;

    private defaultOptions: Object = {
        buttons: ['slideShow', 'fullScreen', 'thumbs', 'close']
    };
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.setAttr('data-fancybox', this._fancybox || 'images');
        this.setAttr('data-caption', this.caption || '');
        this.setAttr(
            'data-options',
            JSON.stringify(this.options) || JSON.stringify(this.defaultOptions)
        );
    }

    private setAttr(attr: string, value: string) {
        this.renderer.setAttribute(this.el.nativeElement, attr, value);
    }
}
