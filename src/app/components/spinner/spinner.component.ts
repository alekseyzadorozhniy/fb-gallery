import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements AfterViewInit {
    @Input() fixed: boolean = true;
    @Input() color: string;

    @ViewChild('svgElement') public svgElementRef: ElementRef;

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit() {
        if (this.color) {
            this.setColor(this.color);
        }
        if (!this.fixed) {
            this.renderer.setStyle(
                this.svgElementRef.nativeElement,
                'position',
                'absolute'
            );
        }
    }

    private setColor(color: string) {
        let rects = this.svgElementRef.nativeElement.querySelectorAll('rect');
        rects.forEach(rect => {
            this.renderer.setStyle(rect, 'fill', color);
        });
    }
}
