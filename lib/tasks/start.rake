desc "This task is to exec rails api and react at the same time"
task :start do
  exec 'foreman start -p 3000'
end
