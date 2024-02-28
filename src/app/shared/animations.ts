import { trigger, transition, style, animate, state } from '@angular/animations';


export const flyInLeft = trigger('flyInLeft', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-25%)',
    }),
    animate(
      '0.5s ease-in-out',
      style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
    )
  ])
])

export const flyInRight = trigger('flyInRight', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(25%)'
    }),
    animate(
      '0.5s ease-in-out',
      style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
    )
  ])
])

export const hover = trigger('hover', [
  state(
    'top',
    style({
      transform: 'translateY(-10%)'
    })
  ),
  state(
    'bottom',
    style({
      transform: 'translateY(0%)'
    })
  ),
  transition('top => bottom', [animate('0.5s ease-in-out')]),
  transition('bottom => top', [animate('0.5s ease-in-out')])
])