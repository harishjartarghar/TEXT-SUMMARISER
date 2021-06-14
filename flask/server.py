
import random
import time
from flask import Flask,jsonify
from flask import request
from flask_cors import CORS
import json
from summarizer import Summarizer
from tf_idf import *   
import requests    
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
from webdriver_manager.chrome import ChromeDriverManager
import re

app = Flask(__name__)
CORS(app)









@app.route('/api/summary1',methods=["POST"])
def SUMMARY1():
	data=request.json
	text=data['text']
	lines=data['lines']

	#TF IDF ALGORITHM
	summary=TF_IDF(text)

	#BERT ALGO
	#model = Summarizer()
	#result=model(text,num_sentences=lines)


	return jsonify({"tf_idf":summary,"bert":"result"})


@app.route('/api/summary2',methods=["POST"])
def SUMMARY2():
	data=request.json
	url=data['url']
	lines=data['lines']
	driver = webdriver.Chrome(ChromeDriverManager().install())
	driver.get(url)
	content = driver.page_source
	soup = BeautifulSoup(content)
	content = soup.find('div', attrs = {'id' : re.compile('content-body-14269002-*')})
	data=""
	for p in content.findChildren("p", recursive = 'False'):
		data+=p.text+" "
	data = re.sub(r'\[[0-9]*\]', ' ', data)
	data = re.sub(r'\s+', ' ',data)

	print(data)
	#TF IDF ALGORITHM
	summary=TF_IDF(data)

	#BERT ALGO
	#model = Summarizer()
	#result=model(data,num_sentences=lines)

	return jsonify({"tf_idf":summary,"bert":"result"})




app.run(host="0.0.0.0",port=5000)
