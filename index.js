const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  console.log(process.argv);

  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  if (args.buy || args.b) {
    cmd = 'buy'
  }

  switch (cmd) {
    case 'buy':
      require('./cmds/buy')(args)
      break
    case 'today':
      require('./cmds/today')(args)
      break

    case 'version':
      require('./cmds/version')(args)
      break

    case 'help':
      require('./cmds/help')(args)
      break

    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}