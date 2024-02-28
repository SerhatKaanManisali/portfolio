import { trigger, transition, style, animate } from '@angular/animations';


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