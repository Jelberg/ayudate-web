import module1 from '../../utils/database/1module.json';
import module2 from '../../utils/database/2module.json';
import module3 from '../../utils/database/3module.json';
import module4 from '../../utils/database/4module.json';

export function getTestByModule(m) {
  const module = parseInt(m);
  switch (module) {
    case 1:
      return module1;
    case 2:
      return module2;
    case 3:
      return module3;
    case 4:
      return module4;
  }
}
