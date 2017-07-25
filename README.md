## Vagrant React & Laravel
A basic Vagrant setup with Node.js, npm, React.js, Webpack, PHP7, Laravel 5.4, mysQl and Apache server.

## Getting started

To get up and running with this environment, you first need to have Virtualbox and Vagrant installed on your system.


If you don't already have those, visit the downloads pages below and follow the instructions for your operating system:

* [Virtualbox Downloads](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant Downloads](https://www.vagrantup.com/downloads.html)

## Vagrant Up and Running
```
> git clone git@github.com:AmroAly/react-laravel.git

> cd simple-virtual-exposition

> chmod -R 777 www

> vagrant up

> Then go to your browser and visit http://172.28.128.100
```
If you want to visit the Laravel project home page you can head over to `http://172.28.128.10`

After everything installs, you can run `vagrant ssh`. This will shell you in to your local Vagrant instance. Have a look around, if you'd like, but the main folder you want to be aware of is the shared `/www` directory. This directory is shared between your virtual machine and your local project directory.

### Project Structure

I have set up the application structure where the Laravel development project files are in the `/var/www/myproject`, React development files are in the `/var/www/myproject/frontend` directory and the final, complied file which is bundle.js is output to the `/var/www/myproject/frontend/bundle.js` file. This can be changed to fit your projects needs. Just note that the changes would also need to be reflected in the `webpack.config.js` file.

### Bundle the project for distribution

Running the Webpack Dev Server will not actually generate the output files. Instead it keeps and serves the resulting files from memory. When you're ready to generate the final output files for your project, `cd /var/www/myproject/frontend` and run `npm run build`. This will generate `bundle.js` file into the same directory!
