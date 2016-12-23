cd /home/nc/apps/fuse-box
git pull;

cd ../node-slate/source/includes

#cp /home/nc/apps/fuse-box/README.md  ./introduction.md
cp -R /home/nc/apps/fuse-box/docs/*  ./

cd /home/nc/apps/node-slate
gulp

