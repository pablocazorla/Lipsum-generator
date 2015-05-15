var site = (function(){
	//lipsumLibrary
	var libPhrases = lipsumLibrary,
		libWords = lipsumLibrary.join(' ').toLowerCase().replace(/\./g,'').replace(/,/g,'').replace(/;/g,'').replace(/:/g,'').split(' '),
		capitalise = function(string){
		    return string.charAt(0).toUpperCase() + string.slice(1);
		},
		randomNumber = function(max, min){
			if(min == undefined){min = 0;}
			return Math.floor((Math.random() * (max-min))+min);
		};

	return {
		





		init : function(){
			// Set containers
			this.$paragraphs = $('#paragraphs');
			this.$titles = $('#titles');
			this.$list = $('#list');
			this.$TagCloud = $('#tag-cloud');

			// Set inputs
			this.$paragraphsCount = $('#paragraphsCount');
			this.$paragraphsPhraseCount = $('#paragraphsPhraseCount');
			this.$tagCloudCount = $('#tagCloudCount');
			this.$tagCloudCapitalise = $('#tagCloudCapitalise');
			this.$titleWordCount = $('#titleWordCount');
			this.$titleCapitalise = $('#titleCapitalise');
			this.$listCount = $('#listCount');
			this.$listPhraseCount = $('#listPhraseCount');

			// Set settings
			this.paragraphsSetting = {
				count : this.$paragraphsCount.val(),
				countPhrases : this.$paragraphsPhraseCount.val()
			};
			this.titlesSetting = {
				capitaliseWords : this.$titleCapitalise.is(':checked'),
				countWords : this.$titleWordCount.val()
			};
			this.listSetting = {
				count : this.$listCount.val(),
				countPhrases : this.$listPhraseCount.val()
			};
			this.tagCloudSetting = {
				count : this.$tagCloudCount.val(),
				capitaliseWords : this.$tagCloudCapitalise.is(':checked')
			};


			this.setEvents().render();
			return this;
		},
		setEvents : function(){
			var self = this;

			this.$paragraphsCount.change(function(){
				self.paragraphsSetting.count = self.$paragraphsCount.val();
				self.renderParagraphs();
			});
			this.$paragraphsPhraseCount.change(function(){
				self.paragraphsSetting.countPhrases = self.$paragraphsPhraseCount.val();
				self.renderParagraphs();
			});
			this.$titleCapitalise.change(function(){
				self.titlesSetting.capitaliseWords = self.$titleCapitalise.is(':checked');
				self.renderTitles();
			});
			this.$titleWordCount.change(function(){
				self.titlesSetting.countWords = self.$titleWordCount.val();
				self.renderTitles();
			});
			this.$listCount.change(function(){
				self.listSetting.count = self.$listCount.val();
				self.renderList();
			});
			this.$listPhraseCount.change(function(){
				self.listSetting.countPhrases = self.$listPhraseCount.val();
				self.renderList();
			});
			this.$tagCloudCount.change(function(){
				self.tagCloudSetting.count = self.$tagCloudCount.val();
				self.renderTagCloud();
			});
			this.$tagCloudCapitalise.change(function(){
				self.tagCloudSetting.capitaliseWords = self.$tagCloudCapitalise.is(':checked');
				self.renderTagCloud();
			});

			$('#update-all').click(function(e){
				e.preventDefault();
				self.render();
			});

			
			return this;
		},
		renderParagraphs : function(){
			var txt = '',
				length = libPhrases.length;
			for(var i = 0; i < this.paragraphsSetting.count;i++){
				txt += '<p>';

				for(var ie = 0; ie < this.paragraphsSetting.countPhrases;ie++){
					txt += lipsumLibrary[randomNumber(length)] + ' ';
				}
				txt += '</p>';
			}
			this.$paragraphs.html(txt);
			return this;
		},
		renderTitles : function(){
			var txt = '',
				length = libWords.length;
			for(var i = 1; i<=6;i++){
				txt += '<h'+i+'>';
				for(var ie = 0; ie< this.titlesSetting.countWords ;ie++){
					var word = libWords[randomNumber(length)];
					if(ie == 0 || this.titlesSetting.capitaliseWords){
						word = capitalise(word);
					}
					txt += word+' ';					
				}
				txt += '</h'+i+'>';
			}
			this.$titles.html(txt);
			return this;
		},
		renderList : function(){
			var txt = '<ul class="list-model">',
				length = libPhrases.length;
			for(var i = 0; i<this.listSetting.count;i++){
				txt += '<li>';
				for(var ie = 0; ie < this.listSetting.countPhrases ;ie++){
					txt += lipsumLibrary[randomNumber(length)] + ' ';
				}
				txt += '</li>';
			}
			txt += '</ul>';
			this.$list.html(txt);
			return this;
		},
		renderTagCloud : function(){
			var txt = '',
				length = libWords.length;
			for(var i = 0; i < this.tagCloudSetting.count; i++){
				var word = libWords[randomNumber(length)];
				if(this.tagCloudSetting.capitaliseWords){
					word = capitalise(word);
				}
				txt += '<span style="font-size:'+(3*randomNumber(12,4))+'px;line-height:1em">'+word+'</span> ';
			}
			this.$TagCloud.html(txt);
			return this;
		},
		render : function(){
			this
			.renderParagraphs()
			.renderTitles()
			.renderList()
			.renderTagCloud();
			return this;
		},

	}
})();
$('document').ready(site.init());
