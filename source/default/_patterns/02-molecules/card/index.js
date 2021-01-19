/**
 * Card
 */

// Module dependencies
import 'protons';
import 'atoms/image';
import 'atoms/button';

// Module template
import './_card.twig';
import './_card-two-cols.twig';
import './_card-three-cols.twig';

// Module styles
import './_card.scss';

export const name = 'card';

export function disable() {}

export function enable() {}

export default enable;
