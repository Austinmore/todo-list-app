import { ApplicationContract } from '@ioc:Adonis/Core/Application'

const providers = [
  '@adonisjs/core',
  '@adonisjs/lucid',
  '@adonisjs/auth',
  '@adonisjs/bodyparser',
  '@adonisjs/cors',
]

const aceProviders = ['@adonisjs/lucid/build/providers/MigrationsProvider']

const aliases = {}

const commands = []

export default { providers, aceProviders, aliases, commands }
