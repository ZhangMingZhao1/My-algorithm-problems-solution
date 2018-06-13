int conv(char *str, int n)
{
	int pos = 0;
	int depth = 0;
	bool last = false;
	bool inc = true;
	while (pos < n)
	{
		if (str[pos] == '\"')
		{
			if (inc)
				depth++;
			else
				depth--;
			if ((inc && depth == 1) || (!inc && depth == 0))
				str[pos] = -1;
			last = true;
		}
		else
		{
			if (last)
				inc = !inc;
			last = false;
			if (str[pos] == ',' && depth == 0)
				str[pos] = '|';
		}
		pos++;
	}
	int back = 0;
	pos = 0;
	while (pos < n)
	{
		str[pos - back] = str[pos];
		if (str[pos] == -1)
			back++;
		pos++;
	}
	return n - back;
}