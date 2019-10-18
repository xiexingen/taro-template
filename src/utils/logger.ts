const _logger = Taro.getLogManager({ level: 0 });
import moment from 'moment';

const Logger = {
  debug(...args) {
    _logger.debug(`${moment().format('YYYY-MM-DD HH:mm:ss')} 📝`, ...args);
    console.debug(`${moment().format('YYYY-MM-DD HH:mm:ss')} 📝`, ...args);
  },
  info(...args) {
    _logger.info(`${moment().format('YYYY-MM-DD HH:mm:ss')} 🍺`, ...args);
    console.info(`${moment().format('YYYY-MM-DD HH:mm:ss')} 🍺`, ...args);
  },
  warn(...args) {
    _logger.warn(`${moment().format('YYYY-MM-DD HH:mm:ss')} ⚠️`, ...args);
    console.warn(`${moment().format('YYYY-MM-DD HH:mm:ss')} ⚠️`, ...args);
  },
  error(...args) {
    _logger.warn(`${moment().format('YYYY-MM-DD HH:mm:ss')} [ Error ] ❌️`, ...args);
    console.error(`${moment().format('YYYY-MM-DD HH:mm:ss')} [ Error ] ❌️`, ...args);
  },
};

export default Logger;
