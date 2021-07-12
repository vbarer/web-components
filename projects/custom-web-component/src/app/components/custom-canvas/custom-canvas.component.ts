import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {IMessage, MessageType} from "./custom-canvas.model";
import {WebGLRenderer} from "three";

@Component({
  selector: 'app-custom-canvas',
  templateUrl: './custom-canvas.component.html',
  styleUrls: ['./custom-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCanvasComponent implements AfterViewInit, OnDestroy {

  private worker: Worker;
  public coords: IMessage;

  private renderer: WebGLRenderer;

  @ViewChild('mainCanvas') mainCanvas: ElementRef;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    if (typeof Worker !== 'undefined') {
      const offscreen = this.mainCanvas.nativeElement.transferControlToOffscreen();
      const rect = this.mainCanvas.nativeElement.getBoundingClientRect();
      offscreen.width = rect.bottom - rect.top;
      // offscreen.width = 300;
      offscreen.height = rect.right - rect.left;
      // offscreen.height = 300;
      this.worker = new Worker(new URL('../web-worker/web-worker.worker', import.meta.url), {type: 'module'});
      this.worker.postMessage({type: MessageType.INIT, canvas: offscreen}, [offscreen]);
      this.worker.onmessage = (msg) => {
        console.log(`scene was updated`);
      };
    }
  }

  @HostListener('window:click', ['$event']) onClick(clickEvent: MouseEvent): void {
    this.coords = {type: MessageType.UPDATE, x: clickEvent.clientX, y: clickEvent.clientY};
    this.worker.postMessage(this.coords);
  }

  ngOnDestroy(): void {
    this.worker.terminate();
  }
}
